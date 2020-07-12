const { DataTypes } = require('sequelize');
const sequelize = require('../../../server').sequelize;

const Text = sequelize.define('Text', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true
    },
    size: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    font: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bold: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    italic: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
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
    tableName: 'text',
    createdAt: false,
    updatedAt: false
});

module.exports = Text;