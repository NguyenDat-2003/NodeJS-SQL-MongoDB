const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getNewPage,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");

//Route
router.get("/", getHomePage);

router.get("/new", getNewPage);

router.get("/create", getCreatePage);

router.post("/create-user", postCreateUser);

module.exports = router;
