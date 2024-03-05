const mongoose = require('mongoose');


const ticketSchema = mongoose.Schema({
    Availability:{
        required: true,
        type: Number,
        default:0
    },
    Type:{
        type: String,
        required:true
    },
    description:{
        required:true,
        type:String,
        maxlength:10000
    },
    price:{
        required:true,
        type: Number,
        maxlength:255
    },
    ticketSold:{
        required:true,
        type:Number,
        default:0
    },
});

const ticket = mongoose.model('ticket',ticketSchema);
module.exports = {
    ticket
}