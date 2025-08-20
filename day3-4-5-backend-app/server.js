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

// Quick test route to check server status
app.get('/', (req, res) => res.send('Bookstore API is running'));

// Mount all book CRUD routes
app.use('/api/books', bookRoutes);

// Custom error handler (keep LAST)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
