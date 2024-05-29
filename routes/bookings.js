const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Booking = require('../models/Booking');

//get all bookings
router.get('/', async (req, res, next) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res, next) => {
    try{
        const newBooking = new Booking(req.body);
        const savedBooking = await newBooking.save();
        res.json(savedBooking);
    } catch (err) { 
        res.json({ message: err });
    }
});



module.exports = router;