# Demand-Driven Schema Design Summit Workshop

This workshop is designed to demonstrate the demand driven approach to designing GraphQL APIs through a series of new feature additions. This project is an extension of the lift-off series (1-4 + lab) Catstronaut application, but has been converted to a federated architecture with the router.

## Getting oriented

This project consists of 6 distinct services that combine together to make the federated catstronaut application:

- `front-end`: The catstronaut React application from the liftoff series
- `subgraph-tracks`: This was previously the `server` in the lift-off series, but converted to a subgraph.
- `subgraph-reviews`: A net new subgraph for handling review data.
- `apollo-router`: Basic router config setup.
- `rest-reviews-api`: This API is the source of truth for review data or our application. This project is intended to represent 2 different APIs: One for review resource data and another for metrics. It's combined in the same app for simplicity sake, but we'll treat this as two separate APIs during the workshop.
- `postgres database`: In addition to the above packages, the provided `docker-compose.yaml` file will also spin up a local postgres database and pre-populate it with review data on start up.

## Running the stack

The simpliest way to spin up this stack is to use docker-compose with the provided `docker-compose.yaml` file:

> `docker-compose up -d`

Each of the above packages have their own READMEs for getting started if you'd like to run them individually.
