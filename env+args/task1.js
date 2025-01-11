"use strict";

const rawParams = process.argv;
const params = [];

if (rawParams.length == 2) {
  console.log("Enter divided number, enter divider number");
  process.exit();
}

for (let i = 2; i < rawParams.length; i++) {
  params.push(rawParams[i]);
}

let divided = parseInt(params[0]); //bolunen
let divider = parseInt(params[1]); //bolen

//defualt attach
if (isNaN(divider) || divider == 0) {
  divider = 6;
}

if (isNaN(divided) || isNaN(divider)) {
  console.log("Divide or divider must be integer.");
  process.exit();
}

const divideds = [];

if (divider > divided) {
  console.log("divider must be less than divided");
  process.exit();
}

for (let num = divider; num <= divided; num += divider) {
  console.log(num);
  if (num % divider == 0) {
    divideds.push(num);
  }
}

let totalOfDivideds = 0;

for (let divided of divideds) {
  totalOfDivideds += divided;
}

//MVP

console.log("Divideds: ", divideds, "Total of divideds: ", totalOfDivideds);
