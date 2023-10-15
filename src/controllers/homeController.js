const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const getNewPage = (req, res) => {
  return res.render("sample.ejs");
};
const postCreateUser = (req, res) => {
  console.log(">> check req: ", req.body);
  res.send("Create new user");
};

module.exports = { getHomePage, getNewPage, postCreateUser };
