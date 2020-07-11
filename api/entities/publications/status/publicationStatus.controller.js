const PublicationStatusView =  require('./publicationStatusView.model');


exports.getAll = async function (req, res) {
    const publicationStatusList = await PublicationStatusView.findAll()
    res.json(publicationStatusList);
};
