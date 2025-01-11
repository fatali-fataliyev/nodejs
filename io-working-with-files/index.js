//Bulit-in Module:

const fs = require("fs"); //fs = filesystem

//3rd party modules available at: npmjs.com

//Write operation split 2 part

//1. Append mod = Write new data to end of old data.
//2. Erase mod = Erase old data write

const contacts = `
XXX
`;
//if file does not exits, this method creates file.
//writeFile override old data.

//writeFile is async but writeFileSync is sync.
fs.writeFile("./contacts.txt", contacts, function (err) {
  if (err) {
    console.log("failed:, ", err);
    return;
  }
  console.log("file writed successfully.");
}); //Async function

console.log("===");
console.log("Sync file writing");
console.log("===");

try {
  fs.writeFileSync("./contacts.txt", 12321); //Sync function
} catch (e) {
    console.log(e)
}

console.log("Program execited");
