const router=require('express').Router();

let Book=require("../models/book.model");

//get all books
router.route("/").get((req, res) => {
    Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json("Error: " + err));
   });

//save to database
   router.route("/").post((req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;


    const newBook = new Book({
    title,author,description
    });
    newBook
    .save()
    .then(() => res.json("Book added!"))
    .catch((err) => res.status(400).json("Error: " + err));
   });
   
//get by id
   router.route("/:id").get((req, res) => {
    Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json("Error: " + err));
   });

//delete by id
   router.route("/:id").delete((req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(() => res.json("Book deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
   });

//update book by id
   router.route("/:id").post((req, res) => {
    Book.findById(req.params.id)
    .then((book) => {
    book.title = req.body.title;
    book.author = req.body.author;
    book.description = req.body.description;

    book
    .save()
    .then(() => res.json("Book updated!"))
    .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
   });

   module.exports = router;