const ImageView = require('./imageView.model');

exports.selectById = async function (id) {
    return await ImageView.findByPk(id);
}