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