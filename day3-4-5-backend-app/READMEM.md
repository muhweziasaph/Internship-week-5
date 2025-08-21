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
- seed.js
- models/Book.js – Mongoose schema
- routes/bookRoutes.js – API routes
- middleware/errorHandler.js – Custom error handler
- config/db.js
- package.json
- README.md – Project information

## How to Run in your locally
1. clone the reository: git clone https://github.com/muhweziasaph/Internship-week-5.git
2. navigate to right folder:eg  cd C:\Users\LENOVO\Desktop\Internship-week-5\week-5-backend-projects\day3-4-5-backend-app
3. install dependencies:npm install express mongoose dotenv cors
4. developement tools : npm install -D nodemon 
5. create.env file and set it to use Atlas mongodb or local mongodb. note:you need to be with mongodb installed on your local machine if your to use local mongodb and you need to be with an account with atlas mongodb if your to use it. connect to the databse of your choice as per settings of .env.
- PORT=5000
- MONGO_URI_LOCAL= put here locally installed mongodb connection string
- MONGO_URI_ATLAS= put here Atlas connection string. ensure that you use the exact <username> username:<password> password of the cluster your to use
- DB_MODE= set either local  or Atlas
6.deposit the seeded books to the choosen database:node seed.js
7. start the server: node server.js
8.it will run locally on http://localhost:5000 and the books can be visible at http://localhost:5000/api/books in the browser. when you check in the database ,bookstore database has to be created with one collection of books.
8. Test API in Postman:
- to read all books: GET http://localhost:5000/api/books
     - remember to remain in params
- to read one: GET http://localhost:5000/api/books/book id
     - remember to remain in params
- to delete: DELETE http://localhost:5000/api/books/book id
     - remember to remain in params
- to update: PUT http://localhost:5000/api/books/book id
     - remember to go to body, set to raw then json. then post the book you intend to replace in json format and ensure that the id captured is the same as the book you intend to replace.
- to create: POST http://localhost:5000/books and in the body,set to raw then choose json  and then put details of the book to add in json format.
     - remember to go to body, set to raw then json. then post the book you intend to replace in json format and ensure that the id captured is the same as the book you intend to replace.
  ## How i deployed it on render and test API
1. created n account on render:render.com
2. signed in with my github
3. authorised render to access my repos
4. created new web service from render dashboard: clicked new + webservice
5. filled details:
   - name: named by project
   - language: node
   -  branch: main
   -  region: oregon (us west)
   -  roor directory: day3-4-5-backend-app(folder of my app to deploy) with in a repository
   -  build command: npm install
   -   start command: npm start
   -   instance i choose hobby projects free version
   -   environmental variables:
        -variable: NODE_ENV  , value: production
        -variable: MONGO_URI_ATLAS , value : my atlas mongodb connection string
   - deployed the web service.
   - after deployment
        - running on  https://internship-week-5-backend-app.onrender.com
        - to see books in the browser https://internship-week-5-backend-app.onrender.com/api/books
6. Testing API in Postman:
  - to read all books: GET https://internship-week-5-backend-app.onrender.com/api/books
        - remember to remain in params
  - to read one: GET https://internship-week-5-backend-app.onrender.com/api/books/book id
        - remember to remain in params
  - to delete: DELETE https://internship-week-5-backend-app.onrender.com/api/books/book id
        - remember to remain in params
  - to update: PUT https://internship-week-5-backend-app.onrender.com/api/books/book id
        - remember to go to body, set to raw then json. then post the book you intend to replace in json format and ensure that the id captured is the same as the book you intend to replace.
  - to create: POST  https://internship-week-5-backend-app.onrender.com/api/books
       - remember to go to body, set to raw then json. then post the book you intend to replace in json format and ensure that the id captured is the same as the book you intend to replace.
