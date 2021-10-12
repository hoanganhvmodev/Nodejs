const db = require("../configs/db");
const Sequelize = require("sequelize");

const employee = db.dataBase.define("employee", {
    id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        unique: true,
        trim: true,
        primaryKey: true,
    },
    userid: {
        type: Sequelize.STRING(36),
        unique: true,
        trim: true,
        allowNull: false,
    },
    firstName: {
        type: Sequelize.STRING(20),
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING(20),
        allowNull: false,
    },
    avatar: {
        type: Sequelize.STRING(250),
        allowNull: true,
    },
    address: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    CMND: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    BHXH: {
        type: Sequelize.STRING(50),
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

module.exports = { employee };