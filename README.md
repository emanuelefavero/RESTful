# RESTful API with Node.js, Express, and MongoDB

This is a backend RESTful API created with Node.js, Express, and MongoDB. It is a simple API that allows you to create, read, update, and delete users. You can use this template to create your own API or test any front end application that requires a backend

## Installation

1. Sign Up or Login to [mongoDB](https://account.mongodb.com/account/login)
2. Create a new cluster
3. Create a new database user
4. Whitelist your IP address
5. Create a new database and connect to it
6. Clone this repository
7. Create a .env file in the root directory
8. Add the following to the .env file: `DATABASE_URL=your_mongo_uri`
   NOTE: _Replace `your_mongo_uri` with your mongoDB connection string (that you will find when clicking on connect to cluster on the mongoDB website)_

9. Run `npm install` to install all dependencies
10. Run `npm start` to start the server

NOTE: _This API will create a new database called `users` and a new collection called `users` and_
