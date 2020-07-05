module.exports = function (app) {
    var controllerTeste = require('./api/entities/controller_teste.js');

    app.route
    // todoList Routes
    app.route('/teste')
        .get(controllerTeste.getAll)
        .post(controllerTeste.insert);
};