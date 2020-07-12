const publicationContext = require('./publication.context');

exports.getAll = async function () {
    return publicationContext.select();
};

exports.getById = async function (id) {
    return publicationContext.selectById(id);
}
