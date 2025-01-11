const fs = require("fs");

//commands:

// 1. deposite: increase balance/
// 2.

let [command, amount] = [process.argv[2], process.argv[3]];
amount = parseFloat(amount);

switch (command) {
  case "deposite":
    deposite(amount);
    break;
  case "withdraw":
    withdraw(amount);
    break;
  case "lotto":
    lotto();
    break;
  case "balance":
    showBalance();
    break;
  default:
    console.log("Expected command: ", command);
}

function deposite(amount) {
  if (isNaN(amount)) {
    console.log("amount must be a number");
    process.exit();
  }
  if (amount == 0) {
    console.log("amount must be minimum 1");
    process.exit();
  }
  if (amount < 0) {
    console.log("amount must be positive number!");
    process.exit();
  }
  if (amount > 2000) {
    console.log("Max deposite limit: 2000$");
    process.exit();
  }

  fs.appendFile("./operations.txt", amount + ",", function (err) {
    if (err) {
      console.log("deposite operation falied: ", err);
      process.exit();
    }
    console.log(amount, "$ + added to your account.");
  });
}

function withdraw(amount) {
  if (isNaN(amount)) {
    console.log("widthdraw amount must be a number");
    process.exit();
  }
  if (amount == 0) {
    console.log("widthdraw amount must be minimum 1");
    process.exit();
  }
  if (amount < 0) {
    console.log("widthdraw amount must be positive number!");
    process.exit();
  }

  fs.appendFile("./operations.txt", "-" + amount + ",", function (err) {
    if (err) {
      console.log("widthdraw operation falied: ", err);
      process.exit();
    }
    console.log(amount, " $ - withdraw from your account");
  });
}

function lotto() {
  let randNum = Math.floor(Math.random() * 10);
  const winAmount = 1;
  const loseAmount = 0.25;

  //user win
  if (randNum % 2 == 0) {
    fs.appendFile("./operations.txt", winAmount + ",", function (err) {
      if (err) {
        console.log("Game crashed: ", err);
        process.exit();
      }
      console.log(`You win ${winAmount}$`);
    });
  } else {
    //user lost
    fs.appendFile("./operations.txt", "-" + loseAmount + ",", function (err) {
      if (err) {
        console.log("Game crashed: ", err);
        process.exit();
      }
      console.log(`You lose ${loseAmount}$`);
    });
  }
}

function showBalance() {
  let balance = 0;
  const deposites = [];
  const withdraws = [];

  const rawOperations = fs.readFileSync("./operations.txt", "utf8");

  if (!rawOperations) {
    console.log("Cannot get operations, ", err);
    process.exit();
  }

  const operations = rawOperations.split(",");

  console.log(operations);
  for (let operation of operations) {
    operation = parseFloat(operation);
    console.log(operation);
    if (operation > 0) {
      deposites.push(operation);
    } else {
      withdraws.push(operation);
    }
    balance += operation
  }

  console.log("Deposites: ", deposites);
  console.log("===");
  console.log("Withdraws: ", withdraws);
  console.log("===");
  console.log("Balance: ", balance, "$");
}
