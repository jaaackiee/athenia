const mongoose = require("mongoose");

const petSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    pet: {
        type: Number,
        required: true,
        default: -1
    },
    petName: {
        type: String,
        required: true,
        default: "pet"
    },
    petHealth: {
        type: Number,
        required: true,
        default: 100
    }
});

module.exports = mongoose.model("pets", petSchema);