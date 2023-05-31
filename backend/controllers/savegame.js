const User = require('../models/register');

const StatusCodes = require("http-status-codes");

const savegame = async (req, res) => {
    try {
        const bod = { ...req.body }
        var { n1, n2, n3, n4, name, email,slide1, fwd1, fwd2, fwd3, fwd4 } = bod;
        const user = await User.findOne({ email: email });
        var str = user.saved;
        var str2 = ""
        if (str.length > 5) {

            str2 = `,{"name":"${name}","n1":${n1},"n2":${n2},"n3":${n3},"n4":${n4},"slide1":${slide1},"fwd4":${fwd4},"fwd1":${fwd1},"fwd3":${fwd3},"fwd2":${fwd2}}`
        }
        else {
            str2 = `{"name":"${name}","n1":${n1},"n2":${n2},"n3":${n3},"n4":${n4},"slide1":${slide1},"fwd4":${fwd4},"fwd1":${fwd1},"fwd3":${fwd3},"fwd2":${fwd2}}`

        }
        var str3 = str.substring(0, str.length - 1);
        str = str3 + str2 + "]";
        user.saved = str;
        user.save();
        return res.status(StatusCodes.OK).json({ msg: "Data Saved" });
    } catch (error) {
        console.log(error)
        return res.status(401).json({ err: error });
    }
}
const loadgame = async (req, res) => {
    const { email } = { ...req.body };
    try {
        const user = await User.findOne({ email: email });
        var str = user.saved;
        if (str.length <= 3) {
            return res.status(201).json({ name: "No sved game yet" });
        }
        else {
            return res.status(200).json({ msg: str });
        }
    } catch (error) {
        console.log(error)
        return res.status(401).json({ msg: error })
    }
}

module.exports = {
    savegame, loadgame
} 