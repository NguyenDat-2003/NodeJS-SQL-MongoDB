const connection = require("../config/database");
const { getAllUser } = require("../services/CRUDServices");

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

  // connection.query(
  //   // Truyền động data từ form đến db bằng dấu ?
  //   `INSERT INTO Users(email, name, city)
  //   VALUES(?, ?, ?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(">>> results = ", results); // results contains rows returned by server
  //     res.send("Create user successeed");
  //   }
  // );

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

const getUpdatePage = (req, res) => {
  const userID = req.params.id;
  return res.render("edit.ejs");
};
module.exports = {
  getHomePage,
  getNewPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
};
