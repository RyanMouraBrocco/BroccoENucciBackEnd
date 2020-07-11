const { DataTypes } = require('sequelize');
const sequelize = require('../../../../server').sequelize;
const TextView = require('../../texts/textView.model');
const ImageView = require('../../images/imageView.model');

const PublicationBodyView = sequelize.define('PublicationBodyView', {
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
    order: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: 'publication_body_view',
    createdAt: false,
    updatedAt: false,
    underscored: true
});

PublicationBodyView.belongsTo(TextView, {
    foreignKey: 'textId',
    as: 'text'
});

PublicationBodyView.belongsTo(ImageView, {
    foreignKey: 'imageId',
    as: 'image'
});

module.exports = PublicationBodyView;