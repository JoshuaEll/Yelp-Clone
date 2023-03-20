const {Sequelize, DataTypes} = require('sequelize');
const config = require('../config/db.config');

const sequelize = new Sequelize(
    process.env.DB_Name, 
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: process.env.DB_DIALECT 
    },
    );


    export { sequelize };
