const { role_permission } = require('../models/role_permission');
const { v4: uuidv4 } = require('uuid');
const logger = require('../loggers/dev_logger');
require('dotenv').config();

class permissionController {

    //getAllPermission
    async getAllPermission(req, res, next) {
        try {
            const Permission = await role_permission.findAll();
            res.status(200).json({
                status: 'success',
                results: Permission.length,
                data: { Permission }
            })
        } catch (err) {
            res.json(err);
        };
    };

    //createOnePermission
    async createOnePermission(req, res, next) {
        const body = req.body;
        body['id'] = uuidv4();
        try {
            const Permission = await role_permission.create({...req.body });
            res.status(200).json({
                status: 'success',
                data: { Permission }
            })
        } catch (err) {
            res.json(err);
        };
    };

    //updateOnePermission
    async updateOnePermission(req, res, next) {
        const id = req.params.id;
        try {
            const Permission = await role_permission.update({...req.body, updateAt: Date.now() }, { where: { id: id } })
                .then(num => {
                    if (num == 1) {
                        res.send({
                            message: "role_permission updated successfully."
                        });
                    } else {
                        res.send({
                            message: `Cannot update role_permission with id=${id}.role_permission not found or req.body is empty!`
                        });
                    }
                })
        } catch (err) {
            res.json(err);
        };
    };

    //deleteOnePermission
    async deleteOnePermission(req, res, next) {
        const id = req.params.id;
        try {
            const Permission = await role_permission.destroy({ where: { id: id } })
                .then(num => {
                    if (num == 1) {
                        res.send({
                            message: "role_permission deleted successfully!"
                        });
                    } else {
                        res.send({
                            message: `Cannot delete role_permission with id=${id}.Form not found!`
                        });
                    }
                })
        } catch (err) {
            res.status(500).send({
                message: "Could not delete role_permission with id =" + id
            });
        };
    };

}

module.exports = new permissionController();