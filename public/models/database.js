const Sequelize = require('sequelize');
require('dotenv/config');
const schemaName = process.env.DATABASE_SCHEMA_NAME;
const passWord = process.env.DATABASE_USER_PASSWORD;
const databasePort = process.env.DATABASE_PORT;

const sequelize = new Sequelize( schemaName, 'root', passWord, 
    {
    host: "localhost",
    dialect: 'mysql',
    port: databasePort,
});

module.exports = sequelize

