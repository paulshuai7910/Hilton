# Appointment Management System Demo

## Overview

This is a full-stack technology architecture project built with the Apollo framework. The front-end uses the react framework as the core to write components, webpack for packaging, hot updates, typescript for type verification, and jest for unit testing.

In the back-end, apollo-server is the core, and the arango database is added, deleted, modified, and checked through the graphql query language. Arangodb runs in docker, and the database is initialized using the node script to create a database named appointment_Database. At the same time, a new collection order_collection is created.

I don’t have enough time to implement the core of the demo login. I implemented the addition and editing of the scheduled information of the data in the code. Of course, I also regard the deletion operation as a kind of editing. After all, what we need is to mark the deletion, not the real delete.

In addition, I will temporarily put the changes I want to make later under todo

## Technology Stack

- Frontend

  - React
  - Typescript
  - Antd
  - Sass
  - Jest
  - Apollo-react

- Backend

  - Apollo-server
  - Nodejs
  - Graphql

- other
  - Webpack
  - Babel
  - ArangoDb
  - Docker
  - Git
  - ...

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

(Out put: Database appointment_Database created successfully.
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
