// models/Book.js
const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema(
  {
    _id : {
     type: Number,
      required: [true, 'Published year is required'], 
   },
    title: {
      type: String,
      required: [true, 'Title is required'],
      minlength: [3, 'Title must be at least 3 characters'],
      trim: true,
      unique: true, // New: prevent duplicate titles
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
      trim: true,
    },
    publishedyear: {
      type: Number,
      required: [true, 'Published year is required'],
      min: [1450, 'Year must be after 1450'],
      max: [new Date().getFullYear(), 'Year cannot be in the future'],
    },
    genre: {
      type: String,
      enum: ['Fiction', 'Non-fiction', 'Biography', 'Science', 'Fantasy', 'Other'],
      default: 'Other',
    },
  },
);
module.exports = mongoose.model('Book', bookSchema);

