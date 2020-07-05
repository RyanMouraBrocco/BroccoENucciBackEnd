const { DataTypes } = require('sequelize');
const sequelize = require('../../../server').sequelize;

const FileView = sequelize.define('FileView', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    extension: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.BLOB,
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: 'file_view',
    createdAt: false,
    updatedAt: false
});

module.exports = FileView;