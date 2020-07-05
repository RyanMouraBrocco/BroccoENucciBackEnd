const { DataTypes } = require('sequelize');
const sequelize = require('../../../server').sequelize;

const ImageView = sequelize.define('ImageView', {
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
    width: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    heigth: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    content: {
        type: DataTypes.BLOB,
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: 'image_view',
    createdAt: false,
    updatedAt: false
});

module.exports = ImageView;