var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

const { Sequelize } = require('sequelize');
const connectionString = require('./connectionString.json');

const sequelize = new Sequelize(connectionString.database, connectionString.username, connectionString.password, {
    host: connectionString.host,
    port: connectionString.port,
    dialect: 'mysql'
});

sequelize.authenticate();

exports.sequelize = sequelize;

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);