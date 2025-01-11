//Parameters

let rawParams = process.argv; //araay
const params = [];

//international DDOS server
if (rawParams.length <= 2) {
  console.log("1: operator(div,sub), 2: numbers(54 21)");
  return;
}

for (let i = 2; i < rawParams.length; i++) {
  params.push(rawParams[i]);
}

let operator = params[0];
let n1 = parseInt(params[1]);
let n2 = parseInt(params[2]);

//type checking
if (typeof operator !== "string") {
  console.log("operator must be: [add,sub,div,mul]");
  process.exit();
}
if (isNaN(n1) || isNaN(n2)) {
  console.log("Numbers must be integers");
  process.exit();
} else {
  switch (operator) {
    case "add":
      console.log(n1 + n2);
      break;
    case "sub":
      console.log(n1 - n2);
      break;
    case "div":
      console.log(n1 / n2);
      break;
    case "mul":
      console.log(n1 * n2);
      break;
    default:
      console.log("Unexpected operator: ", operator);
  }
}
