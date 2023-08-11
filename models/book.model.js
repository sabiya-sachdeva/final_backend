const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
 title: { type: String, required: true },
 author: { type: String, required: true },
 description: { type: String },
});

const Book = mongoose.model("300357448-Sabiya", bookSchema);

module.exports = Book;
