const { StatusCodes } = require('http-status-codes')
const User = require('../models/register');
const BadRequestError = require('../errors/bad-request.js')
const errorHandlerMiddleware = (err, req, res, next) => {
    const bod = { ...req.body }
    User.findOne({ email: bod.email }, (err, data) => {
        if (err) {
            next()
        }
        else {
            return res.status(404).json({ msg: "Email already registered" })
        }
    })
}
module.exports = errorHandlerMiddleware