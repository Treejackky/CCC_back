const mongoose = require('mongoose');

const hotelschema = new mongoose.Schema({
    room: String,
    r_cat: Number,
    r_desc: String,
    r_type: String,
    r_size: {width: Number, length: Number, height: Number},
    r_sts: String,
    cam_sts: String,
    r_price: Number,
});

module.exports = mongoose.model('Hotel', hotelschema);