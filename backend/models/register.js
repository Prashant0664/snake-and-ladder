const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide name"],
        minlength: 3,
    },
    verify: {
        type: Boolean,
        default: false,
    },
    email: {
        type: String,
        required: [true, 'Please provide Email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',],
        unique: [true, "Email already taken"],
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: [5, "Password Length should be more than 5"],
    },
    token: {
        type: String,
        default: ""
    },
    ispassword: {
        type: Boolean,
        default: false,
    },
    saved: {
        type: String,
        default: "[]"
    }
},
    { timestamps: true })

UserSchema.pre('save', async function () {
    if (this.ispassword === false) {
        const salt = await bcrypt.genSalt(10)
        const passw = await bcrypt.hash(this.password, salt);
        this.password = passw
    }
    this.ispassword = true
})

UserSchema.methods.createJWT = function () {
    const tokens = jwt.sign(
        { userId: this._id, name: this.name },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_LIFETIME,
        }
    )
    return (
        tokens
    )
}

UserSchema.methods.createHash = async function () {
    if (this.ispassword === false) {
        const salt = await bcrypt.genSalt(10)
        const passw = await bcrypt.hash(this.password, salt);
        this.password = passw
    }
    this.ispassword = true
}

UserSchema.methods.comparePassword = async function (canditatePassword) {
    var isMatch = await bcrypt.compare(canditatePassword, this.password)
    return isMatch
}

module.exports = mongoose.model('Register', UserSchema);

