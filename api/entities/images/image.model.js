const { DataTypes } = require('sequelize');
const sequelize = require('../../../server').sequelize;

const Image = sequelize.define('Image', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    extension: {
        type: DataTypes.STRING,
        allowNull: false
    },
    width: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    heigth: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    content: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    creationDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "creation_date"
    },
    updateDate: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "update_date"
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    freezeTableName: true,
    tableName: 'image',
    createdAt: false,
    updatedAt: false
});

module.exports = Image;