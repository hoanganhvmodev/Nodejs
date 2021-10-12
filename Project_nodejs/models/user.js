const db = require("../configs/db");
const Sequelize = require("sequelize");

const user = db.dataBase.define("user", {
    id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        unique: true,
        trim: true,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING(50),
        unique: true,
        trim: true,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING(100),
        trim: true,
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING(30),
        allowNull: true,
    },
    phone: {
        type: Sequelize.STRING(12),
        allowNull: true,
    },
    address: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    isActive: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    isDelated: {
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

module.exports = { user };