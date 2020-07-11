module.exports = function (app) {
    var controllerTeste = require('./api/entities/controller_teste.js');
    var publicationStatusController = require('./api/entities/publications/status/publicationStatus.controller');
    var publicationController = require('./api/entities/publications/publication.controller');
    app.route
    // todoList Routes
//    app.route('/teste')
  //      .get(controllerTeste.getAll)
    //    .post(controllerTeste.insert);

    app.route('/publications/status')
        .get(publicationStatusController.getAll);

    app.route('/publications')
      .get(publicationController.getAll);
};