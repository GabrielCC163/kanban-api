# Kanban API

## Node.js API with TypeScript and Express.

## Start

```
docker-compose up -d database

yarn typeorm migration:run
yarn typeorm seed:admin

yarn dev
```

## Test

```
docker-compose up database -d

yarn typeorm migration:run

create a database kanban_test

yarn test
```

## Session

**Login**

- POST /sessions
  - token (use into requests)
  - refresh_token (use within next request when token expires)

**Generate new token**

- POST /refresh-token
  - token (use in requests)
  - refresh_token (use next time token is expires)