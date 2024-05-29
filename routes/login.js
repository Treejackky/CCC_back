const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Member = require('../models/Member');

router.post('/', async (req, res, next) => {
    try{
        // login email and password 
        const member = await Member.findOne({ email: req .body.email, password: req.body.password });
        if (member) {
            res.json(member);
        } else {
            res.json({ message: 'Member not found' });
        }
    } catch (err) { 
        res.json({ message: err });
    }
});

module.exports = router;