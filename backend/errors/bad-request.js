const {StatusCodes, METHOD_FAILURE} =require('http-status-codes')
const CustomAPIError=require('./custom-error');
class BadRequestError extends CustomAPIError{
    constructor(message){
        super(message);
        this.StatusCode=StatusCodes.BAD_REQUEST;
    }
}

module.exports=BadRequestError;