const { DataTypes } = require('sequelize');
const sequelize = require('../../../../server').sequelize;

const PublicationFile = sequelize.define('PublicationFile', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true
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
    },
    creatorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "creator_Id"
    },
    creationDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "creation_date"
    },
    updaterId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "updater_id"
    },
    updateDate: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "update_date"
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    freezeTableName: true,
    tableName: 'publication_file',
    createdAt: false,
    updatedAt: false
});

module.exports = PublicationFile;