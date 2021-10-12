const { format, createLogger, transports, addColors } = require('winston');
const { timestamp, combine, printf } = format;

const myCustomLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        verbose: 4,
        debug: 5,
        silly: 6,
    },
    colors: {
        error: "red",
        warn: "yellow",
        info: "green"
    },
};

const logFormat = printf(({ level, timestamp, message, stack }) => {
    return `[${timestamp}] ${level}: ${stack || message}`;
});

//add color 
addColors(myCustomLevels.colors);

const logger = createLogger({
    levels: myCustomLevels.levels,
    format: combine(
        format.colorize({
            all: true,
        }),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.errors({ stack: true }),
        logFormat
    ),
    defaultMeta: { service: 'user-service' },
    transports: [new transports.Console()],
});

module.exports = logger;