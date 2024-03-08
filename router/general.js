const express = require("express");
let getALLBooks = require("./function.js");
let users = require("./auth_users.js").users;
const public_users = express.Router();
let books = getALLBooks().books

public_users.post("/register", (req, res) => {
  let username = req.query.username
  let password = req.query.password
  if (username && password) {
    users.push({ username, password })
    return res.send(users)
  }
  return res.status(400).send(`provide valid user name {username:"name here",password:"password here"}`);
});
public_users.get("/users", (req, res) => {
  return res.send(users);
});

// Get the book list available in the shop
public_users.get("/", async function (req, res) {
  let books = await getALLBooks()
  return res.send(books);
});

// Get book details based on ISBN
public_users.get("/isbn/:isbn", function (req, res) {
  let promise = new Promise((resolve, reject) => {
    resolve(books[req.params.isbn - 1])
  })
  promise.then(data => res.send(data))
});

public_users.get("/author/:author", function (req, res) {
  let book = books.find((e) => e.author === req.params.author);
  return res.send(book);
});

public_users.get("/title/:title", function (req, res) {
  let book = books.find((e) => e.title === req.params.title);
  return res.send(book);
});

public_users.get("/review/:isbn", function (req, res) {
  let reviews = { reviews: books[req.params.isbn - 1].reviews };
  return res.send(reviews);
});

module.exports.general = public_users;
