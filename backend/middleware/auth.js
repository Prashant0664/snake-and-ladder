const jwt = require('jsonwebtoken')
const { unauthenticatederror } = require('../errors')
const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new unauthenticatederror('NO TOKEN PROVIDED')
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id, username } = decoded
        const user = { id, username };
        next()
    } catch (error) {
        throw new unauthenticatederror("YOU DO NOT HAVE ACCESS! TRY AGAIN .")
    }

}