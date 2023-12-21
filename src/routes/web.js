const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getNewPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
} = require("../controllers/homeController");

//route.Method('/route',handler)
router.get("/", getHomePage);

router.get("/new", getNewPage);

router.get("/create", getCreatePage);

router.post("/create-user", postCreateUser);

router.get("/edit/:id", getUpdatePage);
router.post("/update-user", postUpdateUser);
module.exports = router;
