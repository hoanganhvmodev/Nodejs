function diagram() {
    const { user } = require('../models/user');
    const { form } = require('../models/form');
    const { user_role } = require('../models/user_role');
    const { role } = require('../models/role');
    const { role_permission } = require('../models/role_permission');
    const { api } = require('../models/api');
    const { formDetail } = require('../models/formDetail');
    const { employee } = require('../models/employee');


    user.hasMany(employee, { foreignKey: "userid" });
    employee.belongsTo(user, { foreignKey: "userid" });
    user.hasMany(form, { foreignKey: "userid" });
    form.belongsTo(user, { foreignKey: "userid" });
    form.hasMany(formDetail, { foreignKey: "formid" });
    formDetail.belongsTo(form, { foreignKey: "formid" });
    user.hasMany(user_role, { foreignKey: "userid" });
    user_role.belongsTo(user, { foreignKey: "userid" });
    user_role.belongsTo(role, { foreignKey: "roleid" });
    role.hasMany(user_role, { foreignKey: "roleid" });
    role.hasMany(role_permission, { foreignKey: "roleid" });
    role_permission.belongsTo(role, { foreignKey: "roleid" });
    role_permission.belongsTo(api, { foreignKey: "apiid" });
    api.hasMany(role_permission, { foreignKey: "apiid" });
}

module.exports = diagram;