# Bookstore API
## Objectives  
- Create a simple REST API for managing a bookstore.  
- Implement endpoints to get all books, add a new book, get a book by ID, and delete a book.  
- Learn how to use Node.js and Express to build a backend server.  
## Technologies Used  
- Node.js  
- Express.js  
## Files Included  
- server.js — main server file containing all API routes and logic.  
- package.json — project metadata and dependencies.  
## How to Run It in the Browser  
1. **Install Node.js** (if not installed) from [nodejs.org](https://nodejs.org) and verify in the terminal with:  
   - node -v
   - npm -v

2. **clone the repository and navigate the folder**:
   - git clone https://github.com/muhweziasaph/Internship-week-5.git
   - cd week-5-backend-projects/day1-backend-app
3. **Install dependencies**:
   - npm install express
4. **Start the server**:
   - node server.js
5. **you should see**:
   - Server running on http://localhost:3000
6. **Test in your browser**:
   - Visit http://localhost:3000
   - you should see:
Hello World from Bookstore API
   - Visit http://localhost:3000/books
   - you should see a list of books in JSON
7. Test API with  Postman or any other API tools 
   - Use GET, POST, and DELETE methods on the /books endpoint to interact with the API
