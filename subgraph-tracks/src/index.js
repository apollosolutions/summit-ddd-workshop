import { ApolloServer } from '@apollo/server';
import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServerPluginUsageReportingDisabled } from "@apollo/server/plugin/disabled";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import bodyParser from 'body-parser';
import { fileURLToPath } from "url";
import cors from 'cors';
import { expressMiddleware } from "@apollo/server/express4"
import { dirname, resolve } from "path";
import http from "http";
import { gql } from "graphql-tag";
import { readFileSync } from 'fs';

import { resolvers } from './resolvers.js';
import { TrackAPI } from './datasources/track-api.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const { json } = bodyParser
const app = express();
const httpServer = http.createServer(app);

const port = 4001;

const typeDefs = gql(
  readFileSync(resolve(__dirname, "./schema.graphql"), "utf-8")
);

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  plugins: [ApolloServerPluginUsageReportingDisabled()],
});

server.addPlugin(ApolloServerPluginDrainHttpServer({ httpServer }))
await server.start();

const context = async () => {
  const { cache } = server;
  return {
    dataSources: {
      trackAPI: new TrackAPI({ cache }),
    },
  };
}

app.use('/graphql', cors(), json(), expressMiddleware(server, { context }));

await new Promise((resolve) => httpServer.listen({ port }, resolve));
console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
