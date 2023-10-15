const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getNewPage,
  postCreateUser,
} = require("../controllers/homeController");

//Route
router.get("/", getHomePage);

router.get("/new", getNewPage);

router.post("/create", postCreateUser);

module.exports = router;
