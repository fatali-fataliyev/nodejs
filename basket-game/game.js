const Tank = require("./tankStruct");
const inquirer = require("inquirer");

const currents = []; //max current tank: 3
const backups = []; //max backup tank: 2
let battleExp = 0;

function createPlayer() {
  if (currents.length < 3) {
    console.log("CURRENT: ");
    console.log("==");
  } else if (backups.length < 2) {
    console.log("BACKUP: ");
    console.log("==");
  } else if (backups.length == 2 || currents.length == 3) {
    let i = 0;
    while (i < 5) {
      startWar();
      i++;
    }
    return;
  }

  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "enter tank name: ",
      },
      {
        type: "input",
        name: "position",
        message: "enter tank position: ",
      },
      {
        type: "input",
        name: "offense",
        message: "enter tank offense power(1-9): ",
        validate: function (val) {
          let isFirstElZero = val[0] == "0";
          valInt = parseInt(val);
          if (isNaN(valInt) || valInt < 0 || valInt == 0 || isFirstElZero) {
            return false;
          }
          return true;
        },
      },
      {
        type: "input",
        name: "defense",
        message: "enter tank armor power(1-9): ",
        validate: function (val) {
          let isFirstElZero = val[0] == "0";
          valInt = parseInt(val);
          if (isNaN(valInt) || valInt < 0 || valInt == 0 || isFirstElZero) {
            return false;
          }
          return true;
        },
      },
    ])
    .then(function (answer) {
      let player = new Tank(
        answer.name,
        answer.position,
        answer.offense,
        answer.defense
      );
      if (currents.length < 3) {
        console.log(answer.name, "tank added to currents.");
        currents.push(player);
        createPlayer();
      } else if (backups.length < 2) {
        console.log(answer.name, "tank added to back support");
        backups.push(player);
        createPlayer();
      }
    });
}
createPlayer();

function startWar() {
  let enemyOffense = Math.ceil(Math.random() * 50);
  let totalOffenseOfCurrents = 0;
  let totalOffenseOfBackups = 0;
  let totalOffense;

  for (let tank of currents) {
    totalOffenseOfCurrents += parseInt(tank.offense);
  }
  for (let backupTank of currents) {
    totalOffenseOfBackups += parseInt(backupTank.offense);
  }
  totalOffense = totalOffenseOfCurrents + totalOffenseOfBackups;

  if (totalOffense < enemyOffense) {
    console.log("you lose");
    battleExp--;
  } else {
    console.log("you win!");
    battleExp++;
  }
}
