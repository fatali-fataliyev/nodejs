const fs = require("fs");

function findUser(letter) {
  findLetter = letter.toLocaleUpperCase();
  if (letter == undefined) {
    console.log("letter is undefined.");
    return;
  }
  if (typeof letter != "string") {
    console.log("letter must be string.");
  }
  let data;
  try {
    data = fs.readFileSync("./log.txt", "utf8");
    data = data.split("=");
  } catch (err) {
    console.log("log cannot reading, error: ", err);
  }
  let userNames = [];
  let findedUsernames = [];
  for (let username of data) {
    username = JSON.parse(username);
    userNames.push(username["username"]);
  }

  for (let username of userNames) {
    if (username.indexOf(findLetter) !== -1) {
      findedUsernames.push(username);
      continue;
    }
  }
  console.log(
    `letter: ${letter}, names contains this letter: `,
    findedUsernames
  );
}

module.exports = findUser;
