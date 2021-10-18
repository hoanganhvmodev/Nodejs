const express = require('express');
const Router = express.Router();
const employeeController = require('../controllers/employeeController');
const authroziretion = require('../middlewares/authorization');
const { verifyToken } = require('../middlewares/verifyToken');
const { storage } = require('../middlewares/upLoadAvatar');
//multer
const multer = require('multer');
const upload = multer({ storage: storage });

Router.use(verifyToken);
Router.get('/api/v1/auth/employee', authroziretion.addForm, employeeController.getAllEmployee);
Router.get('/api/v1/auth/employee/:id', authroziretion.getFormUser, employeeController.getEmployeeId);
Router.post('/api/v1/auth/employee', upload.single('avatar'), employeeController.createOneEmployee);
Router.put('/api/v1/auth/employee/:id', upload.single('avatar'), employeeController.updateOneEmployee);
Router.delete('/api/v1/auth/employee/:id', authroziretion.admin, employeeController.deleteOneEmployee);

module.exports = Router;


//get all employee
/**
 * @swagger
 * /auth/employee:
 *   get:
 *     tags:
 *      - Employee API
 *     summary: login with Admin, Drirector, HR
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []    
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

//get employee id
/**
 * @swagger
 * /auth/employee/{formId}:
 *   get:
 *     tags:
 *      - Employee API
 *     summary: login with user to take access permission
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []    
 *     parameters:
 *        - in: path
 *          name: formId
 *          schema:
 *             type: string
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

//delete employee
/**
 * @swagger
 * /auth/employee/{formId}:
 *   delete:
 *     tags:
 *      - Employee API
 *     summary: login with Admin
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []   
 *     parameters:
 *        - in: path
 *          name: formId
 *          schema:
 *             type: string
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