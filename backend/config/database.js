const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.mongoURI, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then( () => console.log("DATABASE CONNECTED SUCESSFULLY !! "))
    .catch( (error) => {
        console.log("ERROR FACED IN DATABASE CONNECTION !!");
        console.error(error);
        process.exit(1);
    })
}; 