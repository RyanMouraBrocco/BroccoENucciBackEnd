const PublicationStatusView =  require('./publicationStatusView.model');


exports.getAll = async function() {
    const publicationStatusList = await PublicationStatusView.findAll()
    return publicationStatusList;
};
