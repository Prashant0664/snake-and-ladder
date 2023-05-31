const MainData=require('../models/model-main');
const User=require('../models/register');
const StatusCodes = require("http-status-codes");

const mainPage= async(req,res)=>{
    try {
        const try1=await MainData.findOne({_id:"63d501ccfb9ce40840f8f683"});
        const dataUser=await User.findOne({_id:req.params.id})
        if(dataUser){
            const {username,email,id,token}=dataUser
            res.status(201).send(`${try1.data1+dataUser._id+try1.data2+dataUser.username+try1.data3+dataUser.email+try1.data4+try1.data5}`) 
        }
        else{
            res.status(201).send("<div style='display:flex;align-items:center;justify-content:center;font-size:24px;color:red'AN ERROR HAS OCCURED</div>")
        }
    } catch (error) {
        res.status(StatusCodes.OK).json({err:"Credentials Do Not Match"})
       console.log(error)
    }
}
module.exports={mainPage}