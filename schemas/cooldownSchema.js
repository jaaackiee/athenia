const mongoose = require("mongoose");

const cooldownSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cooldown: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("cooldowns", cooldownSchema);