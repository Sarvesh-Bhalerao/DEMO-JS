const { Int32 } = require('mongodb')
const mongoose = require('mongoose')


const eventSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    cell_name :{
        type : String,
        required : true
    },
    event_date:{
        type : String,
        required: true
    },
    event_month:{
        type : String,
        required : true
    },
    event_dis:{
        type : String,
        required :false,
        default : "None"
    },
    time :{
        type : String,
        required : false,
        default : "0"
    },
    type:{
        type : String,
        required : false,
        default :"Not specified"
    }

})

module.exports = mongoose.model('Event',eventSchema)