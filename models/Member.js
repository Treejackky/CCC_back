const mongoose = require('mongoose');
const { token } = require('morgan');

const memberSchema = new mongoose.Schema({
//email  pass name-surname phone address 
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: String,
    surname: String,
    phone: String,
    address: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    token : String,

    bookings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Booking'
        }
    ]
    
});

module.exports = mongoose.model('Member', memberSchema);