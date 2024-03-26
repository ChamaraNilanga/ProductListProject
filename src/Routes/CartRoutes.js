const express = require('express');
const controller = require("../Controllers/CartController");

const router = express.Router();

router
//   .get("/:user", controller.getUser)
  .post("/", controller.addToCart)
//   .post("/login", controller.userLogin);

module.exports = router;