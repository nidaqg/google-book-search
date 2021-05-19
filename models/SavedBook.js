const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SavedBookSchema = new Schema (
    {
        title: {
            type: String,
            trim: true
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
        }
    }
);

const SavedBook = mongoose.model("SavedBook", SavedBookSchema);

module.exports = SavedBook;