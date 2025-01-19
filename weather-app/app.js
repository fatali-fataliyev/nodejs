const newSearch = require("./addSearch");
const readLog = require("./getData");
let command = process.argv[2];
let userName = process.argv[3];
let userLocation = process.argv[4];

async function start() {
  if (command == "user") {
    userName = userName.toUpperCase();
    userLocation = userLocation.toUpperCase();
    if (userName == undefined) {
      console.log("please write username.");
      return;
    }
    if (userLocation == undefined) {
      console.log("please write location.");
      return;
    }
    newSearch(userName, userLocation);
  } else if (command == "admin") {
    readLog();
  } else {
    console.log("unknown command");
    process.exit();
  }
}

start();
