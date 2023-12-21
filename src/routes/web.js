const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getNewPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
} = require("../controllers/homeController");

//route.Method('/route',handler)
router.get("/", getHomePage);

router.get("/new", getNewPage);

router.get("/create", getCreatePage);

router.post("/create-user", postCreateUser);

router.get("/edit/:id", getUpdatePage);
module.exports = router;
