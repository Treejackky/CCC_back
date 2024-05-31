const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Member = require('../models/Member');

//get all bookings
router.get('/', async (req, res, next) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res, next) => {
    try{
        const newMember = new Member(req.body);
        const savedMember = await newMember.save();
        
        res.json(savedMember);
    } catch (err) { 
        res.json({ message: err });
    }
});


module.exports = router;