## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


# to install dependencies

npm i
@nestjs/common ================containes major classes, functions of nestjs
@nestjs/core
@nestjs/platform-express ======lets nest use express for http requests (nest doesnt handle http req by default , we need external implementaion , use express(default when genrated using cli) or fastify)
reflect-metadata===============helps to make decorator work
typescript===================== write nest with ts

# server

pipe==========================validation
guard=========================authentication/authourise
conr=troller==================route to a particular function
service ======================run business logic
repository====================access db

controller ================= handle incomming request
service ==================== run business logic and data access
module ===================== grop code together
pipes ====================== validate incomming data
filters ==================== handle error occured during request handling
guards ===================== handle authentication
interceptors =============== handle extra logic to incomming request and outgoing reponse
repository ================= handle data stored in db

# run

npx ts-node-dev src/main.ts

# nammin convention

className.classType.extension
eg.
app.controller.ts
app.module.ts

# cli

npm i -g @nestjs/cli

# commands

nest generate module messages
nest generate controller messages/messages --flat

controller=====>type of class to generate
messages/ =====> place file in message folder
messages ===> call the class messages
--flat ====> dont create extra folder called controller