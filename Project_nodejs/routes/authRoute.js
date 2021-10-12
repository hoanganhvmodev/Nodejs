const express = require('express');
const Router = express.Router();
const authController = require('../controllers/authController');
const authroziretion = require('../middlewares/authorization');

Router.post('/api/v1/auth/register', authController.register);
Router.post('/api/v1/auth/login', authController.login, authroziretion.userLogin);

module.exports = Router;