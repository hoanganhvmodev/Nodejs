const { employee } = require('../models/employee');
const { v4: uuidv4 } = require('uuid');
const logger = require('../loggers/dev_logger');
require('dotenv').config();

class employeeController {

    //getAllEmployee
    async getAllEmployee(req, res, next) {
        try {
            const Employee = await employee.findAll();
            res.status(200).json({
                status: 'success',
                results: Employee.length,
                data: { Employee }
            })
        } catch (err) {
            res.json(err);
        };
    };

    //getEmployeeId
    async getEmployeeId(req, res, next) {
        const id = req.params.id;
        try {
            employee.findOne({
                where: { id: id }
            }).then(employee => {
                res.status(200).json({
                    status: 'success',
                    data: { employee }
                });
            });
        } catch (err) {
            res.send(err);
        };
    };

    //createOneEmployee
    async createOneEmployee(req, res, next) {
        const body = req.body;
        body['id'] = uuidv4();
        try {
            const Employee = await employee.create({...req.body, avatar: req.file.filename, userid: req.Userid });
            res.status(200).json({
                status: 'success',
                data: { Employee }
            })
        } catch (err) {
            res.json(err);
        };
    };

    //updateOneEmployee
    async updateOneEmployee(req, res, next) {
        const id = req.params.id;
        try {
            employee.update({...req.body, avatar: req.file.filename, updateAt: Date.now() }, { where: { id: id } })
                .then(num => {
                    if (num == 1) {
                        res.send({
                            message: "Employee updated successfully."
                        });
                    } else {
                        res.send({
                            message: `Cannot update Employee with id=${id}.Form not found or req.body is empty!`
                        });
                    }
                })
        } catch (err) {
            res.json(err);
        };
    };

    //deleteOneEmployee
    async deleteOneEmployee(req, res, next) {
        const id = req.params.id;
        try {
            employee.destroy({ where: { id: id } })
                .then(num => {
                    if (num == 1) {
                        res.send({
                            message: "Employee deleted successfully!"
                        });
                    } else {
                        res.send({
                            message: `Cannot delete Employee with id=${id}.Employee not found!`
                        });
                    }
                })
        } catch (err) {
            res.status(500).send({
                message: "Could not delete Employee with id =" + id
            });
        };
    };

}

module.exports = new employeeController();