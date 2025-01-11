//Bulit-in Module:

const fs = require("fs"); //fs = filesystem

//3rd party modules available at: npmjs.com

//Write operation split 2 part

//1. Append mod = Write new data to end of old data.
//2. Erase mod = Erase old data write

const contacts = `
Ali,
Anar,
Bro,
Ata,
Ana,
Vuqar
`;
//if file does not exits, this method creates file.
//writeFile override old data.

//writeFile is async but writeFileSync is sync.
fs.writeFile("./contacts.txt", contacts, function (err) {
  if (err) {
    console.log("failed:, ", err);
    return;
  }
  console.log("Async contacts writed successfully.");
}); //Async function

console.log("===");
console.log("Sync file writing");
console.log("===");

fs.writeFileSync("./contacts.txt", contacts); //Sync function

console.log("Sync contacts writed successfully.");

//readFile use for read data from file

fs.readFile("./contacts.txt", "utf8", function(err, data){
    if(err){
        console.log("File cannot read: ", err)
        process.exit()
    }
    console.log("===")
    console.log("Contacts: ")
    console.log(data)


});

//Reading with Sync

const data = fs.readFileSync("./contacts.txt", "utf8");//return error or data.

console.log("data" ,data)


