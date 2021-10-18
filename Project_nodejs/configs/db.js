const dbConfig = require('./db_config');
const logger = require('../loggers/dev_logger');
const Sequelize = require("sequelize");
const diagram = require('../models/diagram');
const dataBase = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    logging: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.dataBase = dataBase;

module.exports = db;
//diagram
diagram();

db.dataBase.authenticate()
    .then(() => {
        logger.info('DB Connection successfully.');
    })
    .catch(err => {
        logger.error('Unable to connect to the database:', err);
    });