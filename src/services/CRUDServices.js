const connection = require("../config/database");

const getAllUser = async () => {
  let [results, fields] = await connection.query("Select * From Users");
  return results;
};

const getUserById = async (userID) => {
  let [results, fields] = await connection.query(
    "Select * From Users Where id = ?",
    [userID]
  );
  let user = results && results.length > 0 ? results[0] : {};

  return user;
};

module.exports = { getAllUser, getUserById };
