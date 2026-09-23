const express = require('express');
const router = express.Router();
const Profile = require('../models/Portfolio');

router.get('/profile', async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = await Profile.create({
        name: "Sahrudhay",
        tagline: "Full Stack Engineer",
        about: "Specialized in scalable web platforms, APIs, and distributed systems.",
        skills: ["JavaScript", "Node.js", "Express", "MongoDB", "Linux/Ubuntu", "Git"],
        projects: [
          { title: "Portfolio Platform", techStack: ["Node.js", "MongoDB", "Express"] },
          { title: "Weather Forecast Engine", techStack: ["React", "Express", "OpenWeather API"] }
        ]
      });
    }
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
