const mongoose=require('mongoose')
const connectDBMain=(url)=>{
  return mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}
module.exports=connectDBMain