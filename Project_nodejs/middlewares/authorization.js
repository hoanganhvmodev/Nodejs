const { user } = require('../models/user');
const { form } = require('../models/form');
const { role } = require('../models/role');
const { user_role } = require('../models/user_role');
const { role_permission } = require('../models/role_permission');
const { api } = require('../models/api');
const logger = require('../loggers/dev_logger');

class authentication {
    // manager
    async manager(req, res, next) {
        //get user_role
        let User_role = await user_role.findAll({ where: { userid: req.Userid } });
        //get role
        let Role = await role.findOne({ where: { id: User_role[0].roleid } });
        let FORM = await form.findAll({ where: { userid: req.Userid } });
        if (Role.id == 4) {
            req.FORM = FORM;
            next();
        } else {
            res.status(401).end('unAuthorize');
        };
    };

    async HR(req, res, next) {
        //get user_role
        let User_role = await user_role.findAll({ where: { userid: req.Userid } });
        //get role
        let Role = await role.findOne({ where: { id: User_role[0].roleid } });
        let FORM = await form.findAll({ where: { userid: req.Userid } });
        if (Role.id == 3) {
            req.FORM = FORM;
            next();
        } else {
            res.status(401).end('unAuthorize');
        };
    };

    //create = admin HR
    async addForm(req, res, next) {
        //get user_role
        let User_role = await user_role.findAll({ where: { userid: req.Userid } });
        //get role
        let Role = await role.findOne({ where: { id: User_role[0].roleid } });
        if (Role.id < 4) {
            next();
        } else {
            res.status(401).end('unAuthorize');
        };
    };

    //getForm = admin Drirector Manager HR Employee
    async getFormUser(req, res, next) {
        //get user_role
        let User_role = await user_role.findAll({ where: { userid: req.Userid } });
        //get role
        let Role = await role.findOne({ where: { id: User_role[0].roleid } });
        let FORM = await form.findAll({ where: { userid: req.Userid } });
        if (Role.id <= 5 && FORM) {
            req.FORM = FORM;
            next();
        } else {
            res.status(401).end('unAuthorize');
        }
    };

    //update = Admin Employee
    async updateForm(req, res, next) {
        //get user_role
        let User_role = await user_role.findAll({ where: { userid: req.Userid } });
        //get role
        let Role = await role.findOne({ where: { id: User_role[0].roleid } });
        if (Role.id == 1 || Role.id == 5) {
            next();
        } else {
            res.status(401).end('unAuthorize');
        }
    };

    //delete = Admin 
    async admin(req, res, next) {
        //get user_role
        let User_role = await user_role.findAll({ where: { userid: req.Userid } });
        //get role
        let Role = await role.findOne({ where: { id: User_role[0].roleid } });
        if (Role.id == 1) {
            next();
        } else {
            res.status(401).end('unAuthorize');
        };
    };

    //userLogin
    async userLogin(req, res, next) {
        let URLDATA = {};
        let USer = req.User;
        try {
            //get user_role
            let User_role = await user_role.findAll({ where: { userid: req.Userid } });
            //get role
            let Role = await role.findOne({ where: { id: User_role[0].roleid } });
            //get role_permission
            let Role_permission = await role_permission.findAll({ where: { roleid: Role.id } });
            let URL = [];
            for (let value of Role_permission) {
                let API = await api.findOne({ where: { id: value.apiid } });
                URL.push(API.url);
            };
            logger.info(URL);

            URLDATA.user = USer;
            URLDATA.url = URL;
            URLDATA.token = req.token;
            if (Role.id == 1) {
                URLDATA.method = 'get, post, put, delete';
                res.status(200).json(URLDATA);
            } else if (Role.id == 2) {
                URLDATA.method = 'get, post, put';
                res.status(200).send(URLDATA);
            } else if (Role.id == 3) {
                URLDATA.method = 'get, post, put';
                res.status(200).send(URLDATA);
            } else if (Role.id == 4) {
                URLDATA.method = 'get,put';
                res.status(200).send(URLDATA);
            } else {
                URLDATA.method = 'get,put';
                res.status(200).send(URLDATA);
            }
        } catch (err) {
            logger.error(err);
        };
    };


};

module.exports = new authentication();