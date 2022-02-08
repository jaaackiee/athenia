const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    coins: {
        type: Number,
        required: true,
        default: 0
    },
    food: {
        type: Number,
        required: true,
        default: 0
    },
    votes: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model("profiles", profileSchema);