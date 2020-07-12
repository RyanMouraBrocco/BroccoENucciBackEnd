const publicationsStatusController = require('./api/entities/publications/status/publicationStatus.controller');
const publicationsController = require('./api/entities/publications/publication.controller');
const selfController = require('./api/entities/self/self.controller');

module.exports = {
  // PublicationsStatus endpoint
  getAllPublicationsStatus: async () => await publicationsStatusController.getAll(),

  // Publications endpoint
  getAllPublications: async () => await publicationsController.getAll(),
  getPublication: async (args) => await publicationsController.getById(args.id),
  createPublication: (args) => args,

  //User endpoint
  login: async (args) => await selfController.login(args.email, args.password)
}