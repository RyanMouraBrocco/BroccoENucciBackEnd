const FileView = require('../files/fileView.model');
const errorHandling = require('../../../errors/errorHandling');

exports.selectById = async function (id) {
    return await FileView.findByPk(id);
}

exports.insert = async function (newFile) {
    
}