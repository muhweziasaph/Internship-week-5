// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
// CREATE a book
router.post('/', async (req, res, next) => {
  try {
    const book = await Book.create(req.body);
    return res.status(201).json(book); // 201 Created
  } catch (err) {
    return next(err); // handled by error middleware
  }
});
// READ all books
router.get('/', async (req, res, next) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    return res.status(200).json(books); // 200 OK
  } catch (err) {
    return next(err);
  }
});
// READ one book
router.get('/:id', async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' }); // 404
    return res.status(200).json(book); // 200 OK
  } catch (err) {
    return next(err);
  }
});
// UPDATE a book
router.put('/:id', async (req, res, next) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true, // important to re-validate on updates
    });
    if (!updated) return res.status(404).json({ message: 'Book not found' }); // 404
    return res.status(200).json(updated); // 200 OK
  } catch (err) {
    return next(err);
  }
});
// DELETE a book
router.delete('/:id', async (req, res, next) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Book not found' }); // 404
    return res.status(200).json({ message: 'Book deleted' }); // 200 OK
  } catch (err) {
    return next(err);
  }
});
module.exports = router;
