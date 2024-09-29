// Import the 'connect' function from the 'mongoose' module.
const { connect } = require("mongoose");

// Define an asynchronous function 'connectDatabase' that will establish the database connection.
const connectDatabase = async () => {
  connect('mongodb://localhost:27017/capstone',{ useNewUrlParser: true })
    .then((con) => {
      console.log(`Connected to the database hostname: ${con.connection.host}`);
      console.log(`Active database: ${con.connection.db.databaseName}`);
    });
};


module.exports = connectDatabase;