const { DataTypes } = require('sequelize');
const sequelize = require('../../../server').sequelize;
const PublicationStatusView = require('./status/publicationStatusView.model');
const PublicationBodyView = require('./bodies/publicationBodyView.model');
const PublicationFileView = require('./files/publicationFileView.model');
const UserView = require('../users/userView.model');

const PublicationView = sequelize.define('PublicationView', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    statusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'status_id'
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: 'publication_view',
    createdAt: false,
    updatedAt: false,
    underscored: true
});


PublicationView.belongsTo(PublicationStatusView, {
    foreignKey: 'statusId',
    as: 'status'
});

PublicationView.belongsTo(UserView, {
    foreignKey: 'userId',
    as: 'user'
});

PublicationView.hasMany(PublicationBodyView, {
    foreignKey: 'publicationId',
    as: 'bodies'
});

PublicationView.hasMany(PublicationFileView, {
    foreignKey: 'publicationId',
    as: 'files'
});

module.exports = PublicationView;