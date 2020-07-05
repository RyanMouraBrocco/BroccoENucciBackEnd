const { DataTypes } = require('sequelize');
const sequelize = require('../../../server').sequelize;

const PublicationView = sequelize.define('PublicationView', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: 'publication_view',
    createdAt: false,
    updatedAt: false
});

module.exports = PublicationView;