const express = require('express');
const jwt = require('jsonwebtoken');
let getALLBooks = require("./function");
const regd_users = express.Router();
let books = getALLBooks().books
const jwtkey = 'jwt_secret_key'
let users = [{
  "username": "ali",
  "password": "123456"
}];

const isValid = (username, password) => {
  if (username && password) {
    let x = users.find(user => {
      return user.username === username && user.password === password
    })
    if (x) {
      return true
    }
  }
  return false
}

const authenticatedUser = (username, password, token) => {
  if (isValid(username, password)) {
    try {
      const tok = jwt.verify(token, jwtkey);
      return tok.username === username && tok.password === password
    } catch (err) {
      return false
    }
  }
  return false
}

//only registered users can login
regd_users.post("/login", (req, res) => {
  let username = req.query.username
  let password = req.query.password
  console.log(username, password);
  if (isValid(username, password)) {
    const token = jwt.sign({ username, password }, jwtkey);
    // return res.send("customer successfully logged in")
    return res.send({ token })
  }
  return res.status(400).send(`invalid user`);
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  let review = {
    review: req.query.review
  }
  books[req.params.isbn - 1].reviews = review
  return res.send(`the review for book with ISBN ${[req.params.isbn]} added/updated successfully`);
});

module.exports.authenticated = regd_users;
module.exports.isAuthenticated = authenticatedUser;
module.exports.isValid = isValid;
module.exports.users = users;
