async function getRandom() {
  let sameTimes = 0;
  const duplicateRandoms = {
    dupsInNumber1: [],
    dupsInNumber2: [],
  };

  for (let i = 0; i < 1000; i++) {
    let rand1 = Math.floor(Math.random() * 100);
    let rand2 = Math.floor(Math.random() * 100);

    if (rand1 === rand2) {
      duplicateRandoms.dupsInNumber1.push(rand1);
      duplicateRandoms.dupsInNumber2.push(rand2);
      sameTimes += 1;
    }
  }

  return { range: 1000, duplicateRandoms, times: sameTimes };
}


// const randomDuplicates = await getRandom();

//We convert async function to sync with await key,
//But in this case our parent function must be async function.
async function showRandoms() {
  const randoms = await getRandom();

  console.log("1. RANDOMS: ", randoms);
}

showRandoms();

console.log("2. other code blocks");

//Get error, because parent function non-async.
// function randomGetter(){
//     const randomDuplicates = await getRandom();
// }
