const express = require('express');
const controller = require("../Controllers/UserController");

const router = express.Router();

router
  .get("/:id", controller.getUser)
  .post("/", controller.createUser)
  .post("/login", controller.userLogin);

module.exports = router;