module.exports = {
    type: process.env.DB_TYPE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    migrations: [
        process.env.DB_MIGRATIONS
    ],
    entities: [
        process.env.DB_ENTITIES
    ],
    cli: {
        "migrationsDir": process.env.DB_MIGRATIONS_DIR
    }
}