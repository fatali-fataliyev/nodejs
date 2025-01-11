const fs = require("fs")

const newContacts = process.argv[2]

//appendFile use for update current file data.
fs.appendFile("./contacts.txt", newContacts + "\n", function(err){
    if(err){
        console.log("File cannot update: ", err)
        process.exit()
    }
    
    console.log("contacts successfully updated.")
});
