// config/db.js
const mongoose = require('mongoose');
async function connectDB() {
  const mode = process.env.DB_MODE; // 'local' or 'atlas'
  const uri =
    mode === 'atlas' ? process.env.MONGO_URI_ATLAS : process.env.MONGO_URI_LOCAL;
  if (!uri) {
    console.error('Missing MongoDB URI for selected DB_MODE in .env');
    process.exit(1);
  }
  try {
    await mongoose.connect(uri);
    console.log(`MongoDB connected (${mode})`);
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
}
module.exports = connectDB;