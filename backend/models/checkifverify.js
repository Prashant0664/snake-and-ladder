const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    mail: {
        type: String,
        minlength: 3,
    },
    isVerify: {
        type: Boolean,
        default:false,
    },
    token:{
        type:String,
        required:true,
    },
    otp:{
        type:Number,
    }
},
    { timestamps: true })


UserSchema.index({createdAt: 1},{expireAfterSeconds: 1800});
module.exports = mongoose.model('VerifyRegister', UserSchema);

