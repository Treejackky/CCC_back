const mongoose = require('mongoose');

const episodeItemSchema = new mongoose.Schema({
    ep: { type: String,},
    type: { type: String },
    row: { type: Number },
    col: { type: Number },
 
}, { _id: false }); 

const historychema = new mongoose.Schema({
    board: {
        type: [[String]],
        required: true
    },
    board_size: {
        type: Number,
        required: true
    },
    episodes: {
        type: [episodeItemSchema], 
        required: true
    },
    winner: {
        type: String,
        required: true
    },  
});

module.exports = mongoose.model('History', historychema);