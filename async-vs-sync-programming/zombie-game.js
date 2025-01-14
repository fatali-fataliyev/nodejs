//logic
//if user correctly find hitNum strikes to zombie
//otherwise hitNum strikes to player

var inquirer = require("inquirer");

let gameRound = process.argv[2];

let playerHealth = 40;
let zombieHealth = 15;

if (gameRound == 0 || gameRound < 2 || gameRound < 0) {
  console.log("game round must be minumum 2 round");
  process.exit();
}
if (gameRound == undefined) {
  console.log("default game round: 6");
  gameRound = 6;
  startGame(gameRound);
} else {
  //user defined gameround
  startGame(gameRound);
}

function hitHealth(playerNum, zomNum, hitPower) {
  //player win
  if (playerNum === zomNum) {
    zombieHealth -= hitPower;
    return `Awesome! You hit -${hitPower} to zombie`;
  }
  if (playerNum !== zomNum) {
    playerHealth -= hitPower;
    return `Oops! You guess ${playerNum}, but number is: ${zomNum} | Zombie -${hitPower} hit to you.`;
  }
}

function getHealthStatus(){
  return `
    Your health: ${playerHealth}
    ---
    Zombie: ${zombieHealth}
  `
}

//every iterate

async function startGame(round) {
  for (let i = 0; i < round; i++) {
    if (playerHealth < 0 || playerHealth === 0 ) {
      console.log("You lose :(");
      process.exit();
    }
    if (zombieHealth < 0 || zombieHealth === 0) {
      console.log("Yess, You kill the zombie.");
      process.exit();
    }
    console.log("Round: ", i + 1);

    let hitPower = Math.ceil(Math.random() * 10);
    let zomNum = Math.ceil(Math.random() * 5);

    let playerGuess = await inquirer.prompt([
      {
        type: "list",
        message: "Try to stay alive! guess hit number: ",
        choices: [1, 2, 3, 4, 5],
        name: "guess",
      },
    ]);
    console.log(hitHealth(playerGuess.guess, zomNum, hitPower));
    console.log(getHealthStatus())
  }
}
