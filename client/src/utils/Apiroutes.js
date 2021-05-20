import axios from "axios";

// eslint-disable-next-line
export default {
    googleSearch: function (search) {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' +  search)
    },
    getBooks: function () {
        return axios.get("/api/books");
    },
    saveBook: function (savedBook) {
        return axios.post("/api/books", savedBook);
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
      },



};

