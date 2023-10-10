# Demand-Driven Schema Design Summit Workshop

_*Please run the docker compose command before coming to the workshop if you are able to*_

Welcome to the "Demand-Driven Schema Design" workshop!

This code base is an extension of the lift-off series (1-4 + lab) Catstronaut application, but has been converted to a federated architecture with the router. There are a few more services described below in [About the project](#about-the-project)

## ⚠️ Before the workshop

Please complete the following pre-requisites and installations before the workshop.

You will need:

- [ ] [Install the Rover CLI](https://www.apollographql.com/docs/rover/getting-started#installation-methods).
- [ ] [Make sure Docker is installed](https://docs.docker.com/engine/install/).
- [ ] Clone this repository.
- [ ] Download dependencies with `docker compose`

## Getting Started

To spin up this project:

> `docker compose up`

or

> `docker compose up -d`

The first time you run the command, it may take a while to download all of the dependencies. *If everyone in the workshop attempts to download at the same time, it may really slow things down*. The services are defined in the `docker-compose.yaml` file (default file name and path)

Visit the local URLs to confirm things are working:

- [Web application](http://localhost:3000) - Catstronaut React app
- [Router sandbox](http://localhost:4000) - View schema and execute queries with sandbox

## About the project

This project consists of 6 distinct applications or services that together, make the catstronaut supergraph:

- `front-end`: The catstronaut React application from the liftoff series
- `subgraph-tracks`: This was previously the `server` in the lift-off series, but converted to a subgraph.
- `subgraph-reviews`: A net new subgraph for handling review data.
- `apollo-router`: Basic router config setup.
- `rest-reviews-api`: This API is the source of truth for review data for our application. This project is intended to represent 2 different APIs: One for review resource data and another for metrics. It's combined in the same app for simplicity sake, but we'll treat this as two separate APIs during the workshop.
- `postgres database`: In addition to the above packages, the provided `docker-compose.yaml` file will also spin up a local postgres database and pre-populate it with review data on start up.

## Test running apps

- [Web application](http://localhost:3000)
- [Router sandbox](http://localhost:4000)
- [Web application](http://localhost:3000)
