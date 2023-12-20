require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config req,body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config template engine
configViewEngine(app);

// khai báo route
app.use("/", webRoutes);

//test connection with database
// connection.query("SELECT * FROM Users ", function (err, results, fields) {
//   console.log(">>> results = ", results); // results contains rows returned by server
// });

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
