const { DataTypes } = require('sequelize');
const sequelize = require('../../../server').sequelize;

const SelfView = sequelize.define('SelfView', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    key:{
        type: DataTypes.STRING,
        allowNull: true
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    freezeTableName: true,
    tableName: 'user',
    createdAt: false,
    updatedAt: false,
    underscored: true
});

module.exports = SelfView;