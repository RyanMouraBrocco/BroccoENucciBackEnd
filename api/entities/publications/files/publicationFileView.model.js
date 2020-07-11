const { DataTypes } = require('sequelize');
const sequelize = require('../../../../server').sequelize;
const FileView = require('../../files/fileView.model');

const PublicationFileView = sequelize.define('PublicationFileView', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        autoIncrementIdentity: false
    },
    publicationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "publication_id"
    },
    fileId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "file_id"
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

PublicationFileView.belongsTo(FileView, {
    foreignKey: 'fileId',
    as: 'file'
});

module.exports = PublicationFileView;