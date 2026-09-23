const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: String,
  tagline: String,
  about: String,
  skills: [String],
  projects: Array
});

module.exports = mongoose.model('Profile', ProfileSchema);
