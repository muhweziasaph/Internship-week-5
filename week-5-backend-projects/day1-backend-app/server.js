// Import Express
const express = require('express');
const app = express();
// Middleware to handle JSON data
app.use(express.json());
// Sample in-memory "database"
let books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" }
];
// 1️⃣ Hello World test route
app.get('/', (req, res) => {
    res.send('Hello World from Bookstore API!');
});
// 2️⃣ REST API route to get all books
app.get('/books', (req, res) => {
    res.json(books);
});
// 3️⃣ REST API route to add a new book
app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook);
    res.status(201).json(newBook);
});
// 4️⃣ REST API route to get a single book by ID
app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
});
// 5️⃣ REST API route to delete a book
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    books = books.filter(b => b.id !== bookId);
    res.json({ message: "Book deleted" });
});
// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});