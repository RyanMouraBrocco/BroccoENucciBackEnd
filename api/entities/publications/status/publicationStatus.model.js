const { DataTypes } = require('sequelize');
const sequelize = require('../../../../server').sequelize;

const PublicationStatus = sequelize.define('PublicationStatus', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        autoIncrementIdentity: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: 'publication_status',
    createdAt: false,
    updatedAt: false
});

module.exports = PublicationStatus;