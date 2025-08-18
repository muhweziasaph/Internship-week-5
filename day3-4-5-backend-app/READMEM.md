# week-5 final project 
# Objectives
- To create a RESTful API for managing a collection of books.
- To connect the API to both a local MongoDB database and MongoDB Atlas.
- To allow switching between databases with minimal configuration changes.
- To provide endpoints for creating, reading, updating, and deleting book records.
## Technology Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemon (for development)
- Postman (Tool for testing API endpoints)
## Files Included
- server.js – Main entry file
- models/Book.js – Mongoose schema
- routes/bookRoutes.js – API routes
- middleware/errorHandler.js – Custom error handler
- config/db.js
- package.json
- README.md – Project information

## How to Run in Browser
1. clone the reository: git clone https://github.com/muhweziasaph/Internship-week-5.git
2. navigate to right folder:eg  cd C:\Users\LENOVO\Desktop\Internship-week-5\week-5-backend-projects\day3-4-5-backend-app
3. install dependencies:npm install express mongoose dotenv cors
4. developement tools : npm install -D nodemon 
5. create.env file and set it to use Atlas mongodb or local mongodb. note:you need to be with mongodb installed on your local machine if your to use local mongodb and you need to be with an account with atlas mongodb if your to use it. connect to the databse of your choice as per settings of .env.
- PORT=3000
- MONGO_URI_LOCAL= put here locally installed mongodb connection string
- MONGO_URI_ATLAS= put here Atlas connection string. ensure that you use the exact <username> username:<password> password of the cluster your to use
- DB_MODE= set either local  or Atlas
6. start the server: npm start 
7. it will run locally on http://localhost:5000 and the books can be visible at http://localhost:5000/api/books in the browser and in the database.
8. Test API in Postman:
- to read all books: GET http://localhost:5000/api/books/
- to read one: GET http://localhost:5000/api/books/book id
- to update: PUT http://localhost:5000/api/books/book id
- to delete: DELETE http://localhost:5000/api/books/book id
- to create: POST http://localhost:5000/books and in the body,set to raw then choose json  and then put details of the book to add in json format.