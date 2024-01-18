const mysql = require("mysql2");

let connection;
try {
  connection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.DB_PORT,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
  });

  connection.connect((err) => {
    if (err) throw err;
    console.log("Connected With DB school-db");
  });
} catch (error) {
  console.log("Error while connecting to DB", error.message);
}
module.exports = connection;
