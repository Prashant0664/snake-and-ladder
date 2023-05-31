const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    datat: {
        type: String
    }, 
    data1: {
        type: String
    }, 
    data2: {
        type: String
    }, 
    data3: {
        type: String
    }, 
    data4: {
        type: String
    }, 
    data5: {
        type: String
    },
    name: {
        type: String
    }
})
module.exports = mongoose.model('mainData', UserSchema);
