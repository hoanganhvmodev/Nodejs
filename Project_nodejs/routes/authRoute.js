const express = require('express');
const Router = express.Router();
const authController = require('../controllers/authController');
const authroziretion = require('../middlewares/authorization');

Router.post('/api/v1/auth/register', authController.register);
Router.post('/api/v1/auth/login', authController.login, authroziretion.userLogin);

module.exports = Router;

//register user
/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags:
 *      - User API
 *     summary: create user
 *     description:
 *           retrieve token to access features
 *     requestBody:
 *       content:
 *        application/json:
 *         schema:
 *            $ref: '#/components/formData/register'    
 *     responses:
 *       404:
 *         description:
 *            error if the field is blank, OR
 *            error if wrong user name or password
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *       
 */

//login user
/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *      - User API
 *     summary: login user
 *     description:
 *           retrieve token to access features
 *     requestBody:
 *       content:
 *        application/json:
 *         schema:
 *            $ref: '#/components/formData/login'    
 *     responses:
 *       404:
 *         description:
 *            error if the field is blank, OR
 *            error if wrong user name or password
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *       
 */