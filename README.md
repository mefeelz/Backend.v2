# Bootcamp Ver.2

<b>With TypeScript & NestJS & Prisma ORM</b>

## Description

Originally, <b>Bootcamp.ver1</b> was implemented with Javascript & ExpressJS & pure MySQL Queries

New version <b>Bootcamp.ver2</b> will be implemented with Typescript & NestJS & Prisma ORM

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

## Migrate the db

```bash
# if you want to set a name, you can ignore '--name init' option
npx prisma migrate dev --preview-feature --name init

# seed
npx prisma db seed --preview-feature
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
