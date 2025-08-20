// middleware/errorHandler.js
module.exports = (err, req, res, next) => {
  // Log once for debugging
  console.error('Error:', err.name, err.message);
  // Mongoose validation errors -> 400
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({ errors }); // 400 Bad Request
  }
  // CastError (invalid ObjectId) -> 400
  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'Invalid ID format' });
  }
  // Duplicate key error -> 409 Conflict
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(409).json({
      message: `Duplicate value for field: ${field}`,
      detail: `${field} '${err.keyValue[field]}' already exists`
    });
  }
  // Fallback -> 500
  return res.status(500).json({ message: 'Server error' });
};