const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const History = require('../models/History');

//get all bookings
router.get('/', async (req, res, next) => {
    try {
        const historys = await History.find();
        res.json(historys);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res, next) => {
    try{
        const newHistory = new History(req.body);
        const savedHistory = await newHistory.save();
        res.json(savedHistory);
    } catch (err) { 
        res.json({ message: err });
    }
});

module.exports = router;