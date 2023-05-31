const CustomAPIError=require('./custom-error')
const UnauthenticatedError=require('./unauthenticated')
const NotFoundError=require('./not-found')
const BadRequestError=require('./bad-request')
module.exports={
    CustomAPIError,
    BadRequestError,
    NotFoundError,
    UnauthenticatedError
}