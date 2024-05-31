const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Booking = require('../models/Booking');
const Hotel = require('../models/Hotel');

// Get all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.json({ message: err.message });
    }
});

// Create a new booking and update hotel room status
router.post('/', async (req, res) => {
    const newBooking = new Booking(req.body);
    try {
        const savedBooking = await newBooking.save();
        const hotel = await Hotel.findOne({ room: req.body.room });
        hotel.r_sts = 'booked';
        hotel.r_booking = savedBooking._id;
        await hotel.save();
        res.json(savedBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
