const express = require("express");
const router = express.Router();
const { getHomePage, getNewPage } = require("../controllers/homeController");

router.get("/", getHomePage);

router.get("/new", getNewPage);

module.exports = router;
