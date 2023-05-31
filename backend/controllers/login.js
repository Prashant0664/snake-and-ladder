const User = require('../models/register');
const StatusCodes = require("http-status-codes");

const login = async (req, res) => {
    try {
        const body = { ...req.body }
        var data = {};
        const { email, password } = req.body
        const user = await User.findOne({ email })
        const isPasswordCorrect = await user.comparePassword(password)
        if (isPasswordCorrect) {
            const tokens = await User.findOne({ email })
            if(user.verify===false){
                return res.status(401).json({ msg:"PLEASE VERIFY YOUR EMAIL FIRST" })
            }
            else{
                return res.status(201).json({msg:"OK"});
            }
        }
        else {
            res.status(StatusCodes.OK).json({ err: "Credentials do not match" })
        }
    } catch (error) {
        res.status(StatusCodes.OK).json({ err: "Credentials Do Not Match" })
        console.log("error")
    }
}
module.exports = { login }