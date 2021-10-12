//dotenv
require('dotenv').config();
const db = require('./configs/db');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const logger = require('./loggers/dev_logger');
const authRoute = require('./routes/authRoute');
const formRoute = require('./routes/formRoute');
const employeeRoute = require('./routes/employeeRoute');
const role_permissionRoute = require('./routes/role_permissionRoute');
const express = require('express');
//use express
const app = express();

//Cors
app.use(cors());

//Body parser
app.use(express.json());

//Mount the route
app.use(authRoute);
app.use(formRoute);
app.use(employeeRoute);
app.use(role_permissionRoute);

//unhandled route
app.all('*', (req, res, next) => {
    const err = new Error('The route can not be found');
    err.statusCode = 404;
    next(err);
});
app.use(errorHandler.errorRoute);

//Simple router
app.get('/', (req, res, next) => {
    res.status(200).json({
        status: 'Success',
    });
});

//Connect db
let connect = async() => {
    try {
        await db.dataBase.sync({ force: false });
    } catch (err) {
        logger.error(err);
    }
}
connect();


const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
});