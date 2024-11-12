const mongoose = require("mongoose");

const SensorDataSchema = new mongoose.Schema({
    temperature: Number,
    brakeWear: Number,
    batteryHealth: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("SensorData", SensorDataSchema);