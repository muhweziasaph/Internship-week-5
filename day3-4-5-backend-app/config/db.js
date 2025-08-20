// config/db.js
const mongoose = require('mongoose');
async function connectDB() {
  // Use Atlas if running in production, otherwise fallback to local
  const mode = process.env.NODE_ENV === 'production' ? 'atlas' : 'local';
  // Select URI based on mode
  const uri =
    mode === 'atlas' ? process.env.MONGO_URI_ATLAS : process.env.MONGO_URI_LOCAL;
  if (!uri) {
    console.error('Missing MongoDB URI for the selected mode!');
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
