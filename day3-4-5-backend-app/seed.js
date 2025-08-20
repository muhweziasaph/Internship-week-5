// seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('./models/Book');

dotenv.config();

const seedBooks = async () => {
  try {
    // Connect to DB
    await mongoose.connect(process.env.MONGO_URI_ATLAS || process.env.MONGO_URI_LOCAL);
    console.log('Connected to database for seeding');

    // Check if books already exist
    const count = await Book.countDocuments();
    if (count > 0) {
      console.log('Books already exist, skipping seeding');
      mongoose.connection.close();
      return;
    }

    // Seed data
    const books = [
      {
        _id: 1,
        title: "The Mzungu Boy",
        author: "Meja Mwangi",
        publishedyear: 1990,
        genre: "Historical Fiction"
      },
      {
        _id: 2,
        title: "Abyssinian Chronicles",
        author: "Moses Isegawa",
        publishedyear: 2000,
        genre: "Historical Fiction"
      },
      {
        _id: 3,
        title: "Kintu",
        author: "Jennifer Nansubuga Makumbi",
        publishedyear: 2014,
        genre: "Historical Fiction"
      }
    ];

    await Book.insertMany(books);
    console.log('Books seeded successfully');

    // Close DB connection
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding books:', err);
    mongoose.connection.close();
  }
};

seedBooks();
