const express = require('express');
const Router = express.Router();
const formController = require('../controllers/formController');
const authroziretion = require('../middlewares/authorization');
const { verifyToken } = require('../middlewares/verifyToken');


Router.use(verifyToken);

//manager get status form
Router.get('/api/v1/auth/form/manager', authroziretion.manager, formController.managergetStatusForm);
Router.patch('/api/v1/auth/form/manager/:id', authroziretion.manager, formController.managerPutStatusForm);
//HR get complete
Router.get('/api/v1/auth/form/HR', authroziretion.HR, formController.HRGetStatusForm);
Router.patch('/api/v1/auth/form/HR/:id', authroziretion.HR, formController.HRPutStatusForm);
//user get form
Router.get('/api/v1/auth/form/user', authroziretion.getFormUser, formController.getFormUser);
Router.put('/api/v1/auth/form/user/:id', authroziretion.updateForm, formController.updateOneForm);
Router.get('/api/v1/auth/form/AllForm', authroziretion.addForm, formController.getAllForm);
Router.get('/api/v1/auth/form/:id', authroziretion.getFormUser, formController.getFormId);
Router.post('/api/v1/auth/form', authroziretion.addForm, formController.createOneForm);
Router.delete('/api/v1/auth/form/:id', authroziretion.admin, formController.deleteOneForm);
//view form done
Router.get('/api/v1/auth/formTV', authroziretion.admin, formController.getFormType0);
Router.get('/api/v1/auth/formDG', authroziretion.admin, formController.getFormType1);

module.exports = Router;

//get all Form
/**
 * @swagger
 * /auth/form/AllForm:
 *   get:
 *     tags:
 *      - Form API
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

//get FormId
/**
 * @swagger
 * /auth/form/{formId}:
 *   get:
 *     tags:
 *      - Form API
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

//post form
/**
 * @swagger
 * /auth/form:
 *   post:
 *     tags:
 *      - Form API
 *     summary: login with Admin , Drirector, HR
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []   
 *     requestBody:
 *       content:
 *        application/json:
 *         schema:
 *            $ref: '#/components/formData/postForm'    
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

//user get Form
/**
 * @swagger
 * /auth/form/user:
 *   get:
 *     tags:
 *      - Form API
 *     summary: login with user to take access permission
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

// put form
/**
 * @swagger
 * /auth/form/user/{formId}:
 *   put:
 *     tags:
 *      - Form API
 *     summary: login with Admin, Employee
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []   
 *     parameters:
 *        - in: path
 *          name: formId
 *          schema:
 *             type: string
 *     requestBody:
 *       content:
 *        application/json:
 *         schema:
 *            $ref: '#/components/formData/putForm'  
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


//delete form
/**
 * @swagger
 * /auth/form/{formId}:
 *   delete:
 *     tags:
 *      - Form API
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

//Manager get  Form
/**
 * @swagger
 * /auth/form/manager:
 *   get:
 *     tags:
 *      - Form API
 *     summary: login with Manager
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

//Manager put form
/**
 * @swagger
 * /auth/form/manager/{formId}:
 *   patch:
 *     tags:
 *      - Form API
 *     summary: login with Manager
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []   
 *     parameters:
 *        - in: path
 *          name: formId
 *          schema:
 *             type: string
 *     requestBody:
 *       content:
 *        application/json:
 *         schema:
 *            $ref: '#/components/formData/managerPutForm'  
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

//HR get  Form
/**
 * @swagger
 * /auth/form/HR:
 *   get:
 *     tags:
 *      - Form API
 *     summary: login with HR
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

//HR put form
/**
 * @swagger
 * /auth/form/HR/{formId}:
 *   patch:
 *     tags:
 *      - Form API
 *     summary: login with HR
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []   
 *     parameters:
 *        - in: path
 *          name: formId
 *          schema:
 *             type: string
 *     requestBody:
 *       content:
 *        application/json:
 *         schema:
 *            $ref: '#/components/formData/HRPutForm'  
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

//get Form Thu Viec
/**
 * @swagger
 * /auth/formTV:
 *   get:
 *     tags:
 *      - Form API
 *     summary: login with Admin
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

//get Form Danh Gia
/**
 * @swagger
 * /auth/formDG:
 *   get:
 *     tags:
 *      - Form API
 *     summary: login with Admin
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