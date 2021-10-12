const express = require('express');
const Router = express.Router();
const formController = require('../controllers/formController');
const authroziretion = require('../middlewares/authorization');
const { sendEmail } = require('../middlewares/sendEmail')
const { verifyToken } = require('../middlewares/verifyToken');


Router.use(verifyToken);
//checkDueDate
Router.get('/api/v1/auth/form/checkDueDate', authroziretion.HR, formController.checkDueDate);
Router.get('/api/v1/auth/form/AllForm', authroziretion.addForm, formController.getAllForm);
//manager get status form
Router.get('/api/v1/auth/form/manager', authroziretion.manager, formController.managergetStatusForm);
Router.patch('/api/v1/auth/form/manager/:id', authroziretion.manager, formController.managerPutStatusForm);
//HR get complete
Router.get('/api/v1/auth/form/HR', authroziretion.HR, formController.HRGetStatusForm);
Router.patch('/api/v1/auth/form/HR/:id', authroziretion.HR, formController.HRPutStatusForm);
Router.get('/api/v1/auth/form/user', authroziretion.getFormUser, formController.getFormUser);
Router.get('/api/v1/auth/form/:id', authroziretion.getFormUser, formController.getFormId);
Router.post('/api/v1/auth/form', authroziretion.addForm, formController.createOneForm);
Router.put('/api/v1/auth/form/:id', authroziretion.updateForm, formController.updateOneForm);
Router.delete('/api/v1/auth/form/:id', authroziretion.admin, formController.deleteOneForm);
//test https://ethereal.email
Router.post('/api/v1/auth/sendEmail', authroziretion.HR, sendEmail);
//view form done
Router.get('/api/v1/auth/formTV', authroziretion.admin, formController.getFormType0);
Router.get('/api/v1/auth/formDG', authroziretion.admin, formController.getFormType1);

module.exports = Router;