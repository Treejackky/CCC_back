const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Member = require('../models/Member');
const Booking = require('../models/Booking');
const Hotel = require('../models/Hotel');

//get all bookings
router.get('/', async (req, res, next) => {
    try {
        const booking = await Booking.find();
        res.json(booking);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res, next) => {
    try {
        const booking = await Booking.findOne({ _id: req.body.booking_id });
        const hotel = await Hotel.findOne({ room: booking.room });

        booking.bk_sts = req.body.bk_sts;
        booking.pay_sts = req.body.pay_sts;

        hotel.r_sts = req.body.r_sts;
        hotel.r_booking = "";
        
        await booking.save();
        await hotel.save();

        res.json(savedBooking);
    } catch (err) {
        res.status(500).json({ message: err});
    }
});


module.exports = router;