// const calc = require("./calc/index.js"); //address to calc file

// console.log(calc.add(5, 55));//Get all Exports

//unpacking required exports

// const { sub } = calc;//I want just sub export from calc exports.s

// console.log(sub(33,3))

//extension unneccasary // is index file exitst don't write fullname of file
const { add, sub } = require("./calc"); //Direct Unpacking from export

console.log(add(5, 25));
console.log(sub(25, 10));

const { sayHello } = require("./greetings");
const { student2 } = require("./student/students.json");

console.log(sayHello(student2.name, student2.surname));
