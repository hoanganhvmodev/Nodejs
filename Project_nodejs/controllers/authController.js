const { user } = require('../models/user');
const { v4: uuidv4 } = require('uuid');
const logger = require('../loggers/dev_logger');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class authController {

    //Register + hash password
    async register(req, res, next) {
        try {
            const body = req.body;
            const password = req.body.password;
            body['id'] = uuidv4();
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            console.log(salt, hashedPassword);
            const User = await user.create({...body, password: hashedPassword });
            //jwt
            const token = jwt.sign(User.id, process.env.APP_SECRET || 'fjdhfjhdsf');
            res.status(200).json({
                status: 'Success',
                data: {
                    User,
                    token
                }
            })
        } catch (err) {
            logger.error(err);
        };
    };

    //login
    async login(req, res, next) {
        let username = req.body.username;
        let password = req.body.password;
        try {
            const UserName = await user.findOne({
                where: {
                    username: username
                }
            });
            if (!UserName) {
                res.status(400).send('username or password is not correct');
                return;
            };
            //jwt
            const token = jwt.sign({ username, password }, process.env.APP_SECRET || 'fjdhfjhdsf');
            //check username + password     
            let Password = await bcrypt.compare(password, UserName.password);
            if (!Password) {
                res.status(400).json({
                    status: 'faild',
                    message: 'username or password is not correct'
                });
                logger.warn('userName or password in not correct');
            } else {
                req.Userid = UserName.id;
                req.User = UserName;
                req.token = token;
                next();
            };

        } catch (err) {
            res.json(err);
        };
    };

}

module.exports = new authController();