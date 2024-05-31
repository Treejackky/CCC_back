const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Member = require('../models/Member');
const Booking = require('../models/Booking');
const Hotel = require('../models/Hotel');

// Get all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

 router.post('/', async (req, res) => {
    try {
        const { booking_id, bk_sts, pay_sts, r_sts } = req.body;

        const booking = await Booking.findById(booking_id);
     
        const hotel = await Hotel.findOne({ room: booking.room });
      

        booking.bk_sts = bk_sts;
        booking.pay_sts = pay_sts;
        hotel.r_sts = r_sts;
        hotel.r_booking = "";

        await Promise.all([booking.save(), hotel.save()]);

        res.json({ message: 'Booking and hotel details updated successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
