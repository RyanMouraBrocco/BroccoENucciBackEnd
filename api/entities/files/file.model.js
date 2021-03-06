const { DataTypes } = require('sequelize');
const sequelize = require('../../../server').sequelize;

const File = sequelize.define('File', {
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
    content: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    creatorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "creator_Id"
    },
    creationDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "creation_date"
    },
    updaterId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "updater_id"
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
    tableName: 'file',
    createdAt: false,
    updatedAt: false
});

module.exports = File;