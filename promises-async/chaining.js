//Promise want callback functions
//Promise for write async code blocks.

const fs = require("fs");

const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(10);
  }, 2000);

  //   for (let i = 0; i < 1000; i++) {
  //     fs.appendFileSync("./data.txt", "File writed with Promise functiion\n");
  //   }
}); //event base programming languages.


//Promise chaning. . .
promise
  .then(function (result) {
    console.log(result);
    return result + 2;
  })
  .then(function (result) {
    console.log(result);
    return result + 4;
  })
  .then(function (result) {
    console.log("final ", result);
  });


console.log("outsite promise");
