# Appointment Management System Demo

## Overview

A fullstack demo used Apollo, Graphql, ArangoDb, nodejs, webpack, typescript, react, antd, sass, jest and docker etc.

## Require

1. docker desktop
2. node >= 18.12.0

## Quick Start

### Installation

Open the terminal in the project file directory,And gradually run the following commands:

#### docker

First:

`docker-compose pull`

second:

`docker run -e ARANGO_ROOT_PASSWORD=hilton -p 8529:8529 -d arangodb:3.10`

(If you have installed Docker desktop software, you can see that the arangodb container is already running after opening it)

#### npm

first:

`npm install`

Second:

`yarn initdb`

(we can see:Database appointment_Database created successfully.
Collection order_collection created successfully.)

## run project

### First run server

Open a terminal window, run:
`npm run server`
or
`yarn server`

### Second run client

Open another terminal window, run:
`npm run start`
or
`yarn start`

# test

### Unit testing of code

`npm run test`
or
`yarn test`

# Get unit test coverage

`npm run test:coverage`
or
`yarn test:coverage`

# todo

1. adding lerna to this project: managing and publishing multiple JavaScript/TypeScript packages from this repository.
2. add redis in docker: Complete API data caching
3. Separate webpack files and add typescript to nodes
4. ...

# contact me

If you encounter any problems, please contact me: **shuaizihao0608@outlook.com**
