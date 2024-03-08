const express = require("express");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const customer_routes = require("./router/auth_users.js").authenticated;
const isAuthenticated = require("./router/auth_users.js").isAuthenticated;
const genl_routes = require("./router/general.js").general;

const app = express();

app.use(express.json());

app.use("/customer", session({ secret: "fingerprint_customer", resave: true, saveUninitialized: true }));

app.use("/customer/auth/*", function auth(req, res, next) {
  let isAuth = isAuthenticated(req.query.username, req.query.password, req.query.token)
  if (isAuth) {
    next()
  } else {
    return res.status(400).send(`inAuthenticated user`);
  }
});

const PORT = 5000;

app.use("/customer", customer_routes);
app.use("/", genl_routes);

app.listen(PORT, () => console.log(`Server is running on http://localhost:5000`));
