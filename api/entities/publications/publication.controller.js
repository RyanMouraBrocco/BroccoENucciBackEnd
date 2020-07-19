const publicationContext = require('./publication.context');
const errorHandling = require('../../../errors/errorHandling');

exports.getAll = async function () {
    return publicationContext.select();
};

exports.getById = async function (id) {
    return publicationContext.selectById(id);
}


exports.post = async function(newPublication, req) {
    if(!req.user.authenticated)
        throw new Error(errorHandling.erroType.unauthorized);

    return await publicationContext.insert(newPublication, req.user.id);
}