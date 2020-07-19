exports.erroType = {
    unauthorized: 'unauthorized',
    forbidden: 'forbidden',
    badRequest: 'badRequest'
}

exports.errorInfo = {
    badRequest: {
        message: 'The request format is not valid',
        statusCode: 400
    },
    unauthorized: {
        message: 'User is not valid',
        statusCode: 401
    },
    forbidden: {
        message: 'Your user not have access this resource',
        statusCode: 403
    }
}