const PublicationView = require('./publicationView.model');
const PublicationStatusView = require('./status/publicationStatusView.model');
const PublicationBodyView = require('./bodies/publicationBodyView.model');
const TextView = require('../texts/textView.model');
const ImageView = require('../images/imageView.model');
const PublicationFileView = require('./files/publicationFileView.model');
const FileView = require('../files/fileView.model');
const UserView = require('../users/userView.model');
const { Op } = require("sequelize");

exports.select = async function () {
    return await PublicationView.findAll({
        where: {
            date: {
                [Op.lte]: new Date()
            }
        }
    });
}

exports.selectById = async function (id) {
    const gotUser = await PublicationView.findAll({
        where: {
            id: id,
            date: {
                [Op.lte]: new Date()
            }
        },
        include: expandAll
    });

    return gotUser[0];
}

const expandAll = [
    { model: PublicationStatusView, as: 'status' },
    { model: UserView, as: 'user' },
    {
        model: PublicationBodyView, as: 'bodies', include: [
            { model: TextView, as: 'text' },
            { model: ImageView, as: 'image' }
        ]
    },
    {
        model: PublicationFileView, as: 'files', include: [
            { model: FileView, as: 'file' }
        ]
    }
]