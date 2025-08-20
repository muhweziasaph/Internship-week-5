// config/db.js
const mongoose = require('mongoose');

async function connectDB() {
  // Select mode from .env (default to local if not set)
  const mode = process.env.DB_MODE === 'atlas' ? 'atlas' : 'local';

  // Pick URI depending on mode
  const uri =
    mode === 'atlas' ? process.env.MONGO_URI_ATLAS : process.env.MONGO_URI_LOCAL;

  if (!uri) {
    console.error(`Missing MongoDB URI for ${mode} mode!`);
    process.exit(1);
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected (${mode})`);
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
}
module.exports = connectDB;