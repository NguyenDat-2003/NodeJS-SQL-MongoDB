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

const UpdateUserById = async (email, name, city, userID) => {
  let [reuslts, fields] = await connection.query(
    `Update Users Set email = ?, name = ?, city = ? Where id = ?  `,
    [email, name, city, userID]
  );
};

const RemoveUserById = async (userID) => {
  let [reuslts, fields] = await connection.query(
    `Delete From Users Where id = ?  `,
    [userID]
  );
};

module.exports = { getAllUser, getUserById, UpdateUserById, RemoveUserById };
