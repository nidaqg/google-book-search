const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema (
    {
        id: {
            type: String,
            required: true,

        },
        title: {
            type: String,
            required: true
        },
        authors: {
            type: Array
        },
        description: {
            type: String
        },
        image: {
            type: String
        },
        link: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;