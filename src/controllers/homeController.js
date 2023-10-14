const connection = require("../config/database");

const getHomePage = (req, res) => {
  let users = [];
  connection.query("SELECT * FROM Users ", function (err, results, fields) {
    console.log(">>> results = ", results); // results contains rows returned by server
    res.send(JSON.stringify(users));
  });
};
const getNewPage = (req, res) => {
  res.render("sample.ejs");
};

module.exports = { getHomePage, getNewPage };
