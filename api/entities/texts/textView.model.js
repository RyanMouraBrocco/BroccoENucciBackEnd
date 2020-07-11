const { DataTypes } = require('sequelize');
const sequelize = require('../../../server').sequelize;

const TextView = sequelize.define('TextView', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true
    },
    size: {
        type: DataTypes.INTEGER,
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
    }
}, {
    freezeTableName: true,
    tableName: 'text_view',
    createdAt: false,
    updatedAt: false
});



module.exports = TextView;