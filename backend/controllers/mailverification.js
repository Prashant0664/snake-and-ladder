const nodemailer = require("nodemailer");
const User = require('../models/checkifverify');
const UserR = require('../models/register');
const axios=require("axios");
const StatusCodes = require("http-status-codes");

require('dotenv').config();


const Mailgen = require('mailgen');

const report = async (req, res) => {
    const { email, name, password } = req.body;
    var str = "";
    for (let i = 0; i < 15; i++) {
        const ch = Math.floor((Math.random() * 10) + 1)
        str += ch;
    }
    try {
        try {
            const uu = await UserR.findOne({ email: email });
            if (!uu) {
                const Users = await UserR.create({
                    username: name,
                    email: email,
                    password: password,
                })
                const token = Users.createJWT()
                Users.token = token
                await Users.save();
            }
            else {
                if (uu.verify === true) {
                    return res.status(401).json({ msg: true });
                }
                else {
                await UserR.deleteOne({email:email});
                var Users = await UserR.create({
                    username: name,
                    email: email,
                    password: password,
                })
                const token = Users.createJWT()
                Users.token = token
                await Users.save();
                }
            }
        } catch (error) {
            res.status(401).json({ msg: error })
        }
        try {
            var Users2 = await User.findOne({ mail: email })
            if(!Users2){
                Users2 = await User.create({ mail: email, token: str })
            }
            else{
                mail = email;
                token = str;
                isVerify = false;
                Users2.save();
                
            }
        } catch (error) {
            console.log(error)
            return res.json({msg:"ERROR: Please TRY AGAIN LATER"});
        }
        let config = {
            service: "gmail",
            auth: {
                user: process.env.MAIL,
                pass: process.env.PASS
            }
        }
        let transporter = nodemailer.createTransport(config)
        let Mailgen2 = new Mailgen({
            theme: "default",
            product: {
                name: "Email Verification",
                link: "https://github.com/Prashant0664"
            }
        })
        let response = {
            body: {
                intro: `Click here to verify your mail <br/> <a href="https://foursnakeandladderapi.onrender.com/api/v1/verify/report/${str}/${email}">https://foursnakeandladderapi.onrender.com/api/v1/verify/report/${str}</a> `,
                outro: "Thank You for Using Our Services"
            }
        }
        let msil = Mailgen2.generate(response)
        let message = {
            from: process.env.MAIL,
            to: email,
            subject: "Email verification 4snake and ladders",
            html: msil,
        }
        transporter.sendMail(message).then(() => {
            return res.status(201).json({ datas: "MAIL SENT SUCCESSFULLY" })
        }).catch((err) => {
            return res.status(201).json({ "ERROR": "SOMETHING WENT WRONG! PLEASE RECHECK YOUR CREDENTIALS" })
        })



    } catch (error) {
        console.log(error);
        return res.status(401).json({ msg: "An error occurred, Please Try Again Later" })
    }
}

const verifylink = async (req, res) => {
    const id = req.params.id
    const email = req.params.email
    try {

        await User.find({ token: id }, async (err, docs) => {
            if (err) {
                console.log(err);
            }
            else {
                await User.updateOne({ token: id }, { isVerify: true })
                const user1 = UserR.findOne({ email: email })
                await user1.updateOne({ email: email }, { verify: true })
                return res.status(201).end("Successfully Verified")
            }
        }
        )

    } catch (error) {
        console.log(error)
        return res.status(401).json({ msg: "Failed to verify" })
    }

}
module.exports = { report, verifylink };
