const SelfAuthView = require('./selfAuthView.model');
const md5 = require('md5');
const { erroType } = require('../../../errors/errorHandling');
const SelfView = require('./selfView.model');
const User = require('../users/user.model');

exports.login = async function (email, password) {
    const authenticatedUser = await SelfAuthView.findAll({
        where: {
            email: email,
            password: md5(password)
        }
    });

    if (authenticatedUser.length == 0) {
        throw new Error(erroType.unauthorized);
    }

    const updatedUser = await User.findByPk(authenticatedUser[0].id);
    await updatedUser.update({
        key: md5(new Date() + updatedUser.name)
    });

    return await SelfView.findByPk(updatedUser.id);
}

const authenticate = function (key) {
    const validSelf = SelfAuthView.findAll({
        where: {
            key: key
        }
    });

    return validSelf;
}

exports.authenticate = async function (req) {
    if (req.headers['authentication-key'] === '' || req.headers['authentication-key'] === undefined || req.headers['authentication-key'] === null) {
        return {
            id: null,
            authenticated: false
        };
    }

    const authenticatedUser = await authenticate(req.headers['authentication-key']);
    const authenticated = authenticatedUser.length === 1;
    if (authenticated) {
        return {
            id: authenticatedUser[0].id,
            authenticated: true
        };
    }

    return {
        id: null,
        authenticated: false
    };
}