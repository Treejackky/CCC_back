const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({

    cin: { type: Date, default: Date.now},
    cout: Date,
    room: String,
    days: Number,
    price: Number,

    cat_name: String,
    cat_food: String,
    cat_desc: String,

    bk_sts: String,
    pay_sts: String,

});

module.exports = mongoose.model('Booking', bookingSchema);