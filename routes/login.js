const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Member = require('../models/Member');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res, next) => {
    try{
        // login email and password 
        const member = await Member.findOne({ email: req .body.email, password: req.body.password });
        if (member) {
            //create token Random string 20 characters
            const token = jwt.sign({ email: member.email, _id: member._id }, 'secret_key', { expiresIn : '1h' });
            member.token = token;
            await member.save();
            res.json(member);
        } else {
            res.json({ message: 'Member not found' });
        }
    } catch (err) { 
        res.json({ message: err });
    }
});

module.exports = router;