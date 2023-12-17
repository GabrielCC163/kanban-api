# Kanban API

## Node.js API with TypeScript and Express.

## Start
<b>Attention</b>: Before running the commands below, rename the .env.sample file to .env
```
cp .env.sample .env
```

Run the commands below:
```
docker-compose up -d database

npm run typeorm migration:run
npm run typeorm seed:admin

npm run dev
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

- POST /login
  - token (use into requests)
  