const { DataTypes } = require('sequelize');
const sequelize = require('../../../../server').sequelize;

const PublicationStatusView = sequelize.define('PublicationStatusView', {
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
    tableName: 'publication_status_view',
    createdAt: false,
    updatedAt: false,
    underscored: true
});

module.exports = PublicationStatusView;