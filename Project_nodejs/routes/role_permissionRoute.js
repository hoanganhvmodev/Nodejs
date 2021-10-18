const express = require('express');
const Router = express.Router();
const permissionController = require('../controllers/role_permissionController');
const authroziretion = require('../middlewares/authorization');
const { verifyToken } = require('../middlewares/verifyToken');


Router.use(verifyToken);
Router.get('/api/v1/auth/role_permission', authroziretion.admin, permissionController.getAllPermission);
Router.post('/api/v1/auth/role_permission', authroziretion.admin, permissionController.createOnePermission);
Router.put('/api/v1/auth/role_permission/:id', authroziretion.admin, permissionController.updateOnePermission);
Router.delete('/api/v1/auth/role_permission/:id', authroziretion.admin, permissionController.deleteOnePermission);

module.exports = Router;

//get role_permission
/**
 * @swagger
 * /auth/role_permission:
 *   get:
 *     tags:
 *      - Role_permission API
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

//post role_permission
/**
 * @swagger
 * /auth/role_permission:
 *   post:
 *     tags:
 *      - Role_permission API
 *     summary: login with Admin
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []   
 *     requestBody:
 *       content:
 *        application/json:
 *         schema:
 *            $ref: '#/components/formData/RolePermissions'    
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

// put role_permission
/**
 * @swagger
 * /auth/role_permission/{formId}:
 *   put:
 *     tags:
 *      - Role_permission API
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
 *     requestBody:
 *       content:
 *        application/json:
 *         schema:
 *            $ref: '#/components/formData/RolePermissions'  
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

//delete role_permission
/**
 * @swagger
 * /auth/role_permission/{formId}:
 *   delete:
 *     tags:
 *       - Role_permission API
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