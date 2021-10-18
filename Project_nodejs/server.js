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
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');
const { formReq } = require('./schema/req');
//use express
const app = express();

//Cors
app.use(cors());

//Body parser
app.use(express.json());

//Swagger API
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.1",
        info: {
            title: 'Express Docs API',
            description: 'Docs API information',
            contact: {
                name: 'API Docs'
            },
        },
        servers: [{
            url: 'http://localhost:5000/api/v1',
            description: 'Deverlopment'
        }],
        //route/*js
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
            formData: {
                ...formReq
            }
        },
        security: [{
            bearerAuth: [],
        }],

    },
    apis: ['server.js', './routes/*.js']
}
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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

module.exports = app;