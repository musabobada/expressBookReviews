const books = require("./booksdb");
module.exports = () => {
    let arr = Object.entries(books).map((e) => e[1])
    return { books: arr }
}