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

var { graphqlHTTP } = require('express-graphql');
var graphQlSchema = require('./api/schema/graphQL.schema');
var routes = require('./routes');

var auth = async function (req, res, next) {
    const authenticator = require('./api/entities/self/self.context');
    req.user = await authenticator.authenticate(req);
    next();
};

app.use('/main', auth, (req, res) => {
    graphqlHTTP({
        schema: graphQlSchema,
        rootValue: routes,
        graphiql: true,
        customFormatErrorFn: function (err) {
            const { errorInfo } = require('./errors/errorHandling');
            const currentErro = errorInfo[err.message];

            if (currentErro != undefined) {
                res.status(currentErro.statusCode);
                return { Error: currentErro.message }
            } else {
                return err.message;
            }
        }
    })(req, res);
});

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);