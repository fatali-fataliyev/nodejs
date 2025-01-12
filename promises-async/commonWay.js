//throw for create same as Errors in golang

"use strict";

async function calc(n1, n2) {
  return n1 / n2;
}

calc(10,2)
  .then(function (resolve) {
    console.log("resoloved", resolve);
  })
  .catch(function (reject) {
    console.log("rejected", reject);
    process.exit();
  });

  //await usage area in only async functions.

  async function awaitTest() {
    const calcRes = await calc(50,2)

    console.log(calcRes)
  }
  awaitTest()

