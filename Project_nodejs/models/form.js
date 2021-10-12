const db = require("../configs/db");
const Sequelize = require("sequelize");

const form = db.dataBase.define("form", {
    id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        unique: true,
        trim: true,
        primaryKey: true,
    },
    userid: {
        type: Sequelize.STRING(36),
        allowNull: false,
    },
    content: {
        type: Sequelize.STRING(250),
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    dueDate: {
        type: Sequelize.STRING(100),
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
    complete: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    reject: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    title: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    type: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
}, {
    freezeTableName: true,
    timestamps: true,
    createdAt: false,
    updatedAt: false,
});

module.exports = { form };