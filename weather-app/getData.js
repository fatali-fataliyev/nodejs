const fs = require("fs");

function readLog() {
  const data = fs.readFileSync("./log.txt", { encoding: "utf8", flag: "r" });

  console.log(data);
}

module.exports = readLog;
