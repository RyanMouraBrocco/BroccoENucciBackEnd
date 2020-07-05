const { DataTypes } = require('sequelize');
const sequelize = require('../../../../server').sequelize;

const PublicationBodyView = sequelize.define('PublicationBodyView', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: 'publication_body_view',
    createdAt: false,
    updatedAt: false
});

module.exports = PublicationBodyView;