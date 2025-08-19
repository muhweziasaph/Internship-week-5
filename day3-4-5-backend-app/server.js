// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const Book = require('./models/Book');
const bookRoutes = require('./routes/bookRoutes');
const errorHandler = require('./middleware/errorHandler');
const app = express();
// Connect to DB (Atlas or Local based on .env)
connectDB();
// Middleware
app.use(cors());
app.use(express.json());
//  Sample books to seed DB
const sampleBooks = [
  {_id: 1, title: "kintu", author: "Jennifer Nansubuga Makumbi", publishedyear: 2014, genre: "Fiction" },
  {_id: 2, title: "The Abyssinian contortionist", author: "Moses Isegawa", publishedyear: 2019, genre: "Fiction" },
  {_id: 3,title: "waiting: A novel of uganda's hidden war", author: "Goretti Kyomuhendo", publishedyear: 1979, genre: "Fiction" },
  {_id: 4, title: "The first daughter", author: "Goretti Kyomuhendo", publishedyear: 1996, genre: "Fiction" }
];

//  Seed function: insert only if not existing
const seedBooks = async () => {
  try {
    for (const sample of sampleBooks) {
      const exists = await Book.findOne({ title: sample.title });
      if (!exists) {
        await Book.create(sample);
        console.log(`Seeded: ${sample.title}`);
      } else {
        console.log(`Skipped (already exists): ${sample.title}`);
      }
    }
    console.log("Seeding complete.");
  } catch (err) {
    console.error("Error seeding books:", err.message);
  }
};
// Routes
app.get('/', (req, res) => res.send('Bookstore API is running'));
// Quick test route to fetch all books
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find({}, { _id: 1, title: 1, author: 1, publishedyear: 1, genre: 1 });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});
// CRUD routes
app.use('/api/books', bookRoutes);
// Custom error handler (keep LAST)
app.use(errorHandler);
const PORT = process.env.PORT || 3000;
// Start server + seed DB
app.listen(PORT,'0.0.0.0', async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  await seedBooks(); // run seeder at startup
});


