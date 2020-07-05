const { DataTypes } = require('sequelize');
const sequelize = require('../../../../server').sequelize;

const PublicationBody = sequelize.define('PublicationBody', {
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
    textId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "text_id"
    },
    imageId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "image_id"
    },
    order:{
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
    tableName: 'publication_body',
    createdAt: false,
    updatedAt: false
});

module.exports = PublicationBody;