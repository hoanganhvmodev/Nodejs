const db = require("../configs/db");
const Sequelize = require("sequelize");

const formDetail = db.dataBase.define("formDetail", {
    id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        unique: true,
        trim: true,
        primaryKey: true,
    },
    formid: {
        type: Sequelize.STRING(36),
        unique: true,
        trim: true,
        allowNull: false,
    },
    content: {
        type: Sequelize.STRING(250),
        allowNull: false,
    },
    managerComment: {
        type: Sequelize.STRING(250),
        allowNull: true,
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

module.exports = { formDetail };