const PublicationView = require('./publicationView.model');
const Publication = require('./publication.model');
const PublicationStatusView = require('./status/publicationStatusView.model');
const PublicationBodyView = require('./bodies/publicationBodyView.model');
const PublicationBody = require('./bodies/publicationBody.model');
const TextView = require('../texts/textView.model');
const ImageView = require('../images/imageView.model');
const PublicationFileView = require('./files/publicationFileView.model');
const FileView = require('../files/fileView.model');
const UserView = require('../users/userView.model');
const { Op } = require("sequelize");
const errorHandling = require('../../../errors/errorHandling');

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
    const gotPublication = await PublicationView.findAll({
        where: {
            id: id,
            date: {
                [Op.lte]: new Date()
            }
        },
        include: expandAll
    });

    return gotPublication[0];
}

async function statusSelectById(id) {
    return await PublicationStatusView.findByPk(id);
}

exports.insert = async function (newPublication, userId) {
    if (newPublication.title.trim() === '') {
        throw new Error(errorHandling.erroType.badRequest);
    }

    const statusCheck = await statusSelectById(newPublication.statusId);
    if (statusCheck === null) {
        throw new Error(errorHandling.erroType.forbidden);
    }

    if (newPublication.date === null || newPublication.date === undefined) {
        newPublication.date = new Date();
    }

    newPublication.userId = userId;
    newPublication.creatorId = userId;
    newPublication.creationDate = new Date();
    newPublication.updaterId = null;
    newPublication.updateDate = null;
    newPublication.deleted = false;

    const publicationCreated = await Publication.create(newPublication);

    if (newPublication.bodies !== null && newPublication.bodies !== undefined) {
        await updateBodies(publicationCreated.id, newPublication.bodies);
    }

    if (newPublication.files !== null && newPublication.files !== undefined) {
        await updateFiles(publicationCreated.id, newPublication.files);
    }

    return await this.selectById(publicationCreated.id);
}

async function updateFiles(publicationId, files, userId) {
    files.forEach(async element => {
        const fileContext = require('../files/file.context');
        const fileCheck = await fileContext.selectById(element.fileId);
        if (fileCheck !== null) {
            element.publicationId = publicationId;
            element.creatorId = userId;
            element.creationDate = new Date();
            element.updaterId = null;
            element.updateDate = null;
            element.deleted = false;

            await PublicationFile.create(element);
        }
    });
}

async function updateBodies(publicationId, bodies, userId) {
    validBodies = bodies.filter(elem => (elem.textId !== null && elem.textId !== undefined) || (elem.imageId !== null && elem.imageId !== undefined));
    validBodies.forEach(async element => {
        const textCheck = null;
        const imageCheck = null;

        if (element.textId !== null && element.textId !== undefined) {
            const textContext = require('../texts/text.context');
            textCheck = await textContext.selectById(element.textId);
        }

        if (element.imageId !== null && element.imageId !== undefined) {
            const imageContext = require('../images/image.context');
            imageCheck = await imageContext.selectById(element.imageId);
        }

        if (textCheck !== null || imageCheck !== null) {
            element.publicationId = publicationId;
            element.creatorId = userId;
            element.creationDate = new Date();
            element.updaterId = null;
            element.updateDate = null;
            element.deleted = false;

            await PublicationBody.create(element);
        }
    });
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