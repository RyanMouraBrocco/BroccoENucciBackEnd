const { DataTypes } = require('sequelize');
const sequelize = require('../../../server').sequelize;

const SelfAuthView = sequelize.define('SelfAuthView', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: 'self_auth_view',
    createdAt: false,
    updatedAt: false,
    underscored: true
});

module.exports = SelfAuthView;