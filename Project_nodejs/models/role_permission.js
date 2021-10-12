const db = require("../configs/db");
const Sequelize = require("sequelize");

const role_permission = db.dataBase.define("role_permission", {
    id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        unique: true,
        trim: true,
        primaryKey: true,
    },
    roleid: {
        type: Sequelize.STRING(36),
        trim: true,
        allowNull: false,
    },
    apiid: {
        type: Sequelize.STRING(36),
        trim: true,
        allowNull: false,
    },
    isDeleted: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    createBy: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    createAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW
    },
    updateAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW
    },
    updateaBy: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
}, {
    freezeTableName: true,
    timestamps: true,
    createdAt: false,
    updatedAt: false,
});

module.exports = { role_permission };