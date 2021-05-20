const router = require("express").Router();
const savedBooks = require("../../controllers/savedBooks");

// Matches with "/api/books"
router.route("/")
  .get(savedBooks.findAll)
  .post(savedBooks.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(savedBooks.remove);

module.exports = router;
