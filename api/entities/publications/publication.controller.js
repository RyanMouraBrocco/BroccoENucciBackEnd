const PublicationView = require('./publicationView.model');
const PublicationStatusView = require('./status/publicationStatusView.model');
const PublicationBodyView = require('./bodies/publicationBodyView.model');
const TextView = require('../texts/textView.model');
const ImageView = require('../images/imageView.model');
const PublicationFileView = require('./files/publicationFileView.model');


exports.getAll = async function (req, res) {
    const publicationList = await PublicationView.findAll({
        include: [{ model: PublicationStatusView, as: 'status' }, { model: PublicationBodyView, as: 'bodies', include: [{ model: TextView, as: 'text' }, { model: ImageView, as: 'image' }] }, { model: PublicationFileView, as: 'files' }]
    });
    res.json(publicationList);
};
