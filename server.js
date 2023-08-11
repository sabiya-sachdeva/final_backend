const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app=express();
const port=5000;

app.use(cors());
app.use(express.json());


//const uri = process.env.ATLAS_URI;


const uri = "mongodb+srv://mylibrary:123@bookinfo.qi1yw1g.mongodb.net/?retryWrites=true&w=majority";
//const uri="mongodb://127.0.0.1:27017/BookList";
mongoose.connect(uri, { useNewUrlParser: true});


const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});
const bookRouter = require('./routes/bookrouter');

//prefix with books
 
app.use('/books', bookRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
   });