class errorHandler {

    //unhandled route
    errorRoute(err, req, res, next) {
        err.statusCode = err.statusCode || 500;

        res.status(err.statusCode).json({
            status: 'failed',
            message: err.message
        });
    };

};

module.exports = new errorHandler;