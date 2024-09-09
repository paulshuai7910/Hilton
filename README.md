# Appointment Management System Demo

## Overview

This is a full-stack technology architecture project built with the Apollo framework. The front-end uses the react framework as the core to write components, webpack for packaging, hot updates, typescript for type verification, and jest for unit testing.

In the back-end, apollo-server is the core, and the arango database is added, deleted, modified, and checked through the graphql query language. Arangodb runs in docker, and the database is initialized using the node script to create a database named appointment_Database. At the same time, a new collection order_collection is created.

I don’t have enough time to implement the core of the demo login. I implemented the addition and editing of the scheduled information of the data in the code. Of course, I also regard the deletion operation as a kind of editing. After all, what we need is to mark the deletion, not the real delete.

In addition, I will temporarily put the changes I want to make later under todo

## Technology Stack

| Frontend                                                                                               | Backend                                                        | other                                                                                           |
| ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| <ul><li>React</li><li>Typescript</li><li>Antd</li><li>Sass</li><li>Jest</li><li>Apollo-react</li></ul> | <ul><li>Apollo-server</li><li>Nodejs</li><li>Graphql</li></ul> | <ul><li>Webpack</li><li>Babel</li><li>ArangoDb</li><li>Docker</li><li>Git</li><li>...</li></ul> |

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

For developer, If you want to inspect server code, I suggest you use the " yarn server:debug " command. which will monitor your serverdiamagnetic in real time.

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

# why did I do?

- why graphql: GraphQL has good support for a variety of NoSQL databases
- structure: As a full-stack project structure, the amount of front-end and back-end code will be very large, so the back-end code needs to be separated from the structure.
- Apollo: Apollo provides unified technical support on the front-end and back-end

# Todo

- adding lerna to this project: managing and publishing multiple JavaScript/TypeScript packages from this repository.
- adding data-loader for graphql: Solving the n+1 problem of associated queries
- add redis in docker: Complete API data caching
- Separate webpack files and add typescript to nodes
- ...

# contact me

If you encounter any problems, please contact me: <a href="mailto:shuaizihao0608@outlook.com">shuaizihao0608@outlook.com</a>

# About me

个人博客网站 [About Me](https://blog.zhshuai.top/about/)。
