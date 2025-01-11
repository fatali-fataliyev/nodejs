const fs = require("fs");

fs.readFile("./contacts.txt", "utf-8", function (err, rawContacts) {
  if (err) {
    console.log("File cannot read: ", err);
    process.exit();
  }

  let contacts = rawContacts.split(",");

  for (let idx in contacts) {
    console.log("#:", parseInt(idx)+1, contacts[idx]);
  }
});
