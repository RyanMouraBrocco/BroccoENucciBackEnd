const publicationsStatusController = require('./api/entities/publications/status/publicationStatus.controller');

module.exports = {
  getPublicationsStatus: async () => await publicationsStatusController.getAll(),
}