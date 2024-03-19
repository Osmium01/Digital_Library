import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    youtubeLink: { type: String, required: true },
    enrolledUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  });
  
  module.exports = mongoose.model('Course', courseSchema);