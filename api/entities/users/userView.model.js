const { DataTypes } = require('sequelize');
const sequelize = require('../../../server').sequelize;

const UserView = sequelize.define('UserView', {
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
    }
}, {
    freezeTableName: true,
    tableName: 'user_view',
    createdAt: false,
    updatedAt: false,
    underscored: true
});

module.exports = UserView;