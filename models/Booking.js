const mongoose = require('mongoose');

let a = new Date();
let b = new Date();
// set a datenow 
a.setDate(a.getDate());
//set b datenow + 3
b.setDate(b.getDate() + 3);
// get day difference 
let diff = b - a;
let day = diff / (1000 * 60 * 60 * 24);


const bookingSchema = new mongoose.Schema({

    cin: { type: Date, default: Date.now },
    cout: { type: Date,  default: Date.now},
    room: { type: String,  },
    days: { type: Number, default: day},

    price: { type: Number, },
    cat_name: { type: String,  },
    cat_food: { type: String,  },
    cat_desc: { type: String,  },
    bk_sts: { type: String,},
    pay_sts: { type: String, },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
    },

});

module.exports = mongoose.model('Booking', bookingSchema);