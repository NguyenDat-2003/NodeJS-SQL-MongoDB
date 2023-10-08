const getHomePage = (req, res) => {
  res.send("Hello World with pakage Nodemon sdasd!");
};
const getNewPage = (req, res) => {
  res.render("sample.ejs");
};

module.exports = { getHomePage, getNewPage };
