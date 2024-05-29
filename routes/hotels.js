const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Hotel = require('../models/Hotel');

//get all bookings
router.get('/', async (req, res, next) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res, next) => {
    try{
        const newHotel = new Hotel(req.body);
        const savedHotel = await newHotel.save();
        res.json(savedHotel);
    } catch (err) { 
        res.json({ message: err });
    }
});

module.exports = router;