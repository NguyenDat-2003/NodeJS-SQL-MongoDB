const connection = require("../config/database");
const {
  getAllUser,
  getUserById,
  UpdateUserById,
  RemoveUserById,
} = require("../services/CRUDServices");

const getHomePage = async (req, res) => {
  let results = await getAllUser();
  return res.render("home.ejs", { listUsers: results });
};
const getNewPage = (req, res) => {
  return res.render("sample.ejs");
};
const postCreateUser = async (req, res) => {
  // let email = req.body.email;
  // let name = req.body.name;
  // let city = req.body.city;
  let { email, name, city } = req.body;

  let [reuslts, fields] = await connection.query(
    `INSERT INTO Users(email, name, city) VALUES(?, ?, ?)`,
    [email, name, city]
  );
  console.log(reuslts);
  res.send("Create user successeed");
};

const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userID = req.params.id;
  let user = await getUserById(userID);

  return res.render("edit.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  let { userID, email, name, city } = req.body;
  await UpdateUserById(email, name, city, userID);
  // res.send("Update user successeed");
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userID = req.params.id;
  let user = await getUserById(userID);
  return res.render("delete.ejs", { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
  const userID = req.body.userID;
  await RemoveUserById(userID);
  res.redirect("/");
};

module.exports = {
  getHomePage,
  getNewPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
