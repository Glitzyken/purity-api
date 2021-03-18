const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.route("/").get(userController.getAllUsers).post();

router.route("/sign-up").post();

module.exports = router;
