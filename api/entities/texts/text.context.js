const TextView = require('./textView.model');
const errorHandling = require('../../../errors/errorHandling');

exports.selectById = async function (id) {
    return await TextView.findByPk(id);
}

exports.insert = async function (newText) {
    if (newText.content === '') {
        throw new Error(errorHandling.erroType.badRequest);
    }

    

}