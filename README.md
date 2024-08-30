# overview

# Quick Start

## Installation

Open the terminal in the project file directory,And gradually run the following commands:

1. docker-compose pull
2. docker run -e ARANGO_ROOT_PASSWORD=hilton -p 8529:8529 -d arangodb:3.10
   (If you have installed Docker desktop software, you can see that the arangodb container is already running after opening it)
3. yarn initdb (we can see:Database appointment_Database created successfully.
   Collection order_collection created successfully.)

npm install

## run project

### First run server

Open a terminal window, run: yarn server

### Second run client

Open another terminal window, run: yarn start

# todo

1. add redis in docker,Complete API data caching
2. Separate webpack files and add typescript to nodes
