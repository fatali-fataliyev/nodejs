const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "fatali",
  password: "fatali32",
  database: "favourite_songs",
});

connection.connect(function (err) {
  if (err) {
    console.log("failed to connect MYSQL: ", err);
    return;
  }
  console.log("connected to books_db", connection.threadId);

  Start();
});

var genre = "rap";
var artist = "st";
function Start() {
  //connection mostly used.
  connection.query(
    "select * from SONGS WHERE genre = ? and artist like concat('%', ?, '%')",
    [genre, artist],
    function (err, results, fields) {
      results.forEach(function (val, idx) {
        console.log(val.title);
      });
    }
  );
}
