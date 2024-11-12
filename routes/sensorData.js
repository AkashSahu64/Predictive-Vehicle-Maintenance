const express = require("express");
const router = express.Router();
const SensorData = require("../models/SensorData");

// POST route to save sensor data
router.post("/", async (req, res) => {
    try {
        const { temperature, brakeWear, batteryHealth } = req.body;
        const newSensorData = new SensorData({ temperature, brakeWear, batteryHealth });
        await newSensorData.save();
        res.status(201).json({ message: "Sensor data saved successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to save sensor data." });
    }
});

// GET route to fetch recent sensor data
router.get("/", async (req, res) => {
    try {
        const data = await SensorData.find().sort({ createdAt: -1 }).limit(10);
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve sensor data." });
    }
});

module.exports = router;
