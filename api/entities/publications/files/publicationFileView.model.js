const { DataTypes } = require('sequelize');
const sequelize = require('../../../../server').sequelize;

const PublicationFileView = sequelize.define('PublicationFileView', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        autoIncrementIdentity: false
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: 'publication_file_view',
    createdAt: false,
    updatedAt: false
});

module.exports = PublicationFileView;