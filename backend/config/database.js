const { Client } = require("pg");

const client = new Client({
    user: "postgres",
    host: process.env.DB_URL,
    database: "yelp",
    password: "temp",
    port: 5432,
})


module.exports = client;