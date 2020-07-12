const selfContext = require('./self.context');

exports.login = async function(login, password){
    return selfContext.login(login, password);
};