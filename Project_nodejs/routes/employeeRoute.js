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
Router.get('/api/v1/auth/employee/:id', authroziretion.addForm, employeeController.getEmployeeId);
Router.post('/api/v1/auth/employee', upload.single('avatar'), employeeController.createOneEmployee);
Router.put('/api/v1/auth/employee/:id', upload.single('avatar'), employeeController.updateOneEmployee);
Router.delete('/api/v1/auth/employee/:id', authroziretion.admin, employeeController.deleteOneEmployee);

module.exports = Router;