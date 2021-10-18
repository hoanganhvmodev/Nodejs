const { form } = require('../models/form');
const { formDetail } = require('../models/formDetail');
const { v4: uuidv4 } = require('uuid');
const db = require('../configs/db');
const logger = require('../loggers/dev_logger');
const { sendEmail } = require('../middlewares/sendEmail')
require('dotenv').config();
const sizePage = 2;


class formController {

    //getAllForm + formdetail
    async getAllForm(req, res, next) {
        try {
            let Form = await form.findAll({
                include: formDetail
            });
            res.status(200).json({
                status: 'success',
                results: Form.length,
                data: { Form }
            })
        } catch (err) {
            res.json(err);
        };
    };

    //getAllForm thu viec + check dueDate
    async getFormType0(req, res, next) {
        try {
            let Form = await form.findAll({
                where: { type: 0, status: 'close' },
                include: formDetail
            });
            let data = [];
            for (let a of Form) {
                if ((Date.parse(a.dueDate) - Date.now()) > 0) {
                    data.push(a);
                }
            };
            res.status(200).json({
                status: 'success',
                result: data.length,
                Form: { data }
            })
        } catch (err) {
            res.json(err);
        };
    };

    //getAllForm đanh gia dinh ki hang nam + check dueDate
    async getFormType1(req, res, next) {
        try {
            let Form = await form.findAll({
                where: { type: 1, status: 'close' },
                include: formDetail
            });
            let data = [];
            for (let a of Form) {
                if ((Date.parse(a.dueDate) - Date.now()) > 0) {
                    data.push(a);
                }
            };
            res.status(200).json({
                status: 'success',
                result: data.length,
                Form: { data }
            })
        } catch (err) {
            res.json(err);
        };
    };


    //HRGetStatusForm + formdetail
    async HRGetStatusForm(req, res, next) {
        try {
            let Form = await form.findAll({
                where: { status: 'submitted', complete: 1 },
                include: formDetail
            });
            res.status(200).json({
                status: 'success',
                result: Form.length,
                data: { Form }
            })
        } catch (err) {
            res.json(err);
        };
    };

    //HRPutStatusForm + formdetail
    async HRPutStatusForm(req, res, next) {
        let t = await db.dataBase.transaction();
        const id = req.params.id;
        try {
            await form.update({
                status: req.body.status,
                updateAt: Date.now()
            }, {
                where: {
                    id: id,
                },
            }, { transaction: t });
            let FORM = await form.findOne({ where: { id: id }, transaction: t });
            let FormDetail = req.body.formDetail;
            await formDetail.update({
                managerComment: FormDetail.managerComment,
                updateAt: Date.now()
            }, {
                where: {
                    formid: FORM.id,
                },
            }, { transaction: t });
            await t.commit();
            res.status(200).end('Updated Success');
        } catch (err) {
            res.status(500).send(`form not found id :` + id);
            logger.error(err);
            t.rollback();
        };
    };

    //managerGetStatusForm + formdetail
    async managergetStatusForm(req, res, next) {
        try {
            let Form = await form.findAll({
                where: { status: 'submitted' },
                include: formDetail
            });
            res.status(200).json({
                status: 'success',
                result: Form.length,
                data: { Form }
            })
        } catch (err) {
            res.json(err);
        };
    };

    //managerPutForm
    async managerPutStatusForm(req, res, next) {
        let t = await db.dataBase.transaction();
        const id = req.params.id;
        try {
            await form.update({
                complete: req.body.complete,
                reject: req.body.reject,
                updateAt: Date.now()
            }, {
                where: {
                    id: id,
                },
            }, { transaction: t });
            let FORM = await form.findOne({ where: { id: id }, transaction: t });
            let FormDetail = req.body.formDetail;
            await formDetail.update({
                managerComment: FormDetail.managerComment,
                updateAt: Date.now()
            }, {
                where: {
                    formid: FORM.id,
                },
            }, { transaction: t });
            await t.commit();
            res.status(200).end('Updated Success');
        } catch (err) {
            res.status(500).send(`form not found id :` + id);
            logger.error(err);
            t.rollback();
        };
    };


    //getUserForm + formdetail
    async getFormUser(req, res, next) {
        try {
            let Form = await form.findAll({
                where: { userid: req.Userid },
                include: formDetail
            });
            res.status(200).json({
                status: 'success',
                result: Form.length,
                data: { Form }
            })
        } catch (err) {
            res.json(err);
        };
    };

    //getFormId + formdetail
    async getFormId(req, res, next) {
        const id = req.params.id;
        try {
            let Form = await form.findOne({
                where: { id: id },
                include: formDetail
            });
            res.status(200).json({
                status: 'success',
                data: { Form }
            })
        } catch (err) {
            res.json(err);
        };
    };

    //createOneForm + formDetail
    async createOneForm(req, res, next) {
        let t = await db.dataBase.transaction();
        try {
            let Form = await form.create({
                id: uuidv4(),
                title: req.body.title,
                type: req.body.type,
                userid: req.body.userid,
                content: req.body.content,
                status: req.body.status,
                dueDate: req.body.dueDate,
                isDeleted: req.body.isDeleted,
                createBy: req.body.createBy,
                updateaBy: req.body.updateaBy,
            }, { transaction: t });
            let FormDetail = req.body.formDetail;
            await formDetail.create({
                id: uuidv4(),
                formid: Form.id,
                content: FormDetail.content,
                managerComment: FormDetail.managerComment,
                isDeleted: FormDetail.isDeleted,
                createBy: FormDetail.createBy,
                updateaBy: FormDetail.updateaBy,
            }, { transaction: t });
            await t.commit();
            sendEmail(req, res);
            res.status(200).end('create Success');
        } catch (err) {
            res.status(500).send('failed');
            logger.error(err);
            t.rollback();
        }
    };

    //UserUpdateOneForm + formdetail
    async updateOneForm(req, res, next) {
        let t = await db.dataBase.transaction();
        const id = req.params.id;
        try {
            await form.update({
                content: req.body.content,
                status: req.body.status,
                updateAt: Date.now()
            }, {
                where: {
                    id: id,
                },
                transaction: t
            });
            let FORM = await form.findOne({ where: { id: id }, transaction: t });
            let FormDetail = req.body.formDetail;
            await formDetail.update({
                content: FormDetail.content,
                updateAt: Date.now()
            }, {
                where: {
                    formid: FORM.id,
                },
                transaction: t
            });
            await t.commit();
            res.status(200).end("updeted Success")
        } catch (err) {
            t.rollback();
            logger.error(err);
            res.status(500).send(`form not found id :` + id);
        }
    };

    //deleteOneForm + formDetail
    async deleteOneForm(req, res, next) {
        let t = await db.dataBase.transaction();
        const id = req.params.id;
        try {
            let formDB = await form.findOne({
                where: { id: id }
            }, { transaction: t })
            await formDetail.destroy({
                where: {
                    formid: formDB.id
                },
            }, { transaction: t });
            await form.destroy({
                where: {
                    id: id,
                },
            }, { transaction: t });
            await t.commit();
            res.status(200).end("deleted Success")
        } catch (err) {
            t.rollback();
            console.log(err);
            res.status(500).end(err);
        }
    };


}

module.exports = new formController();