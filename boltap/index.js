function execCmd(command) {
  if (command == undefined) {
    return { err: true, errMsg: "Emr bosh ola bilmez." };
  }

  switch (command) {
    case "2": {
      return { err: null, result: isDiv2 };
    }
    case "3": {
      return { err: null, result: isDiv3 };
    }
    case "4": {
      return { err: null, result: isDiv4 };
    }
    case "5": {
      return { err: null, result: isDiv5 };
    }
    case "6": {
      return { err: null, result: isDiv6 };
    }
    case "7": {
      return { err: null, result: isDiv7 };
    }
    case "8": {
      return { err: null, result: isDiv8 };
    }
    case "9": {
      return { err: null, result: isDiv9 };
    }
    case "10": {
      return { err: null, result: isDiv10 };
    }
    default: {
      return { err: true, errMsg: `taninmayan emr: ${command}` };
    }
  }
}

function getHelp() {
  return `
        Emrler:
        1. komek, bu mesaji ekrana chap edir.
        2. qayda, qaydalari ekrana chap edir.
        ---------------------------------------------------------------
        ---------------------------ESAS EMRLER-------------------------
        ---------------------------------------------------------------
        2. reqem cut => verilen reqemin 2-ye bolunub bolunmediyin deyir.
        ---------------------------------------------------------------
        3. reqem 3 => verilen reqemin 3-e bolunub bolunmediyin deyir.
        ---------------------------------------------------------------
        4. reqem 4 => verilen reqemin 3-e bolunub bolunmediyin deyir.
        ---------------------------------------------------------------
        5. reqem 5 => verilen reqemin 5-e bolunub bolunmediyin deyir.
        ---------------------------------------------------------------
        6. reqem 6 => verilen reqemin 6-a bolunub bolunmediyin deyir.
        ---------------------------------------------------------------
        7. reqem 7 => verilen reqemin 7-e bolunub bolunmediyin deyir.
        ---------------------------------------------------------------
        8. reqem 8 => verilen reqemin 3-e bolunub bolunmediyin deyir.
        ---------------------------------------------------------------
        9. reqem 9 => verilen reqemin 9-a bolunub bolunmediyin deyir.
        ---------------------------------------------------------------
        10. reqem 10 => verilen reqemin 10-a bolunub bolunmediyin deyir.
        ---------------------------------------------------------------
    `;
}

function getRules() {
  return `
        Ikiye Bolunme: Ededin ikiye bolunmesinden alinan qaliq sifira beraberdirse eded ikiye bolunur.
        ---------------------------------------------------------------
        Uche Bolunme: Ededlerin cemi uche bolunurse eded uche bolunur => 333 (3+3+3 = 9 / 9/3 = 3)
        ---------------------------------------------------------------
        
        ---------------------------------------------------------------
        6. reqem 6 => verilen reqemin 6-a bolunub bolunmediyin deyir.
        ---------------------------------------------------------------
        7. reqem 7 => verilen reqemin 7-e bolunub bolunmediyin deyir.
        ---------------------------------------------------------------
        8. reqem 8 => verilen reqemin 3-e bolunub bolunmediyin deyir.
        ---------------------------------------------------------------
        9. reqem 9 => verilen reqemin 9-a bolunub bolunmediyin deyir.
        ---------------------------------------------------------------
        10. reqem 10 => verilen reqemin 10-a bolunub bolunmediyin deyir.
        ---------------------------------------------------------------
    `;
}

function start() {
  if (process.argv[2] == "komek") {
    console.log(getHelp());
  } else if (process.argv[2] == "qayda") {
    console.log(getRules());
  } else {
    let [numErr, numErrMsg] = checkNum(parseInt(process.argv[2]));
    if (numErr != null) {
      console.log(numErrMsg);
      process.exit();
    }

    let inputNumber = process.argv[2];
    let { err, errMsg } = execCmd(process.argv[3]);

    if (err != null) {
      console.log(errMsg);
      process.exit();
    }
    let { result } = execCmd(process.argv[3]);

    console.log(result(inputNumber));
  }
}
start();

function checkNum(number) {
  if (number == 0) {
    return [true, "reqem 0 ola bilmez: " + number];
  } else if (number < 0) {
    return [true, "reqem menfi ola bilmez: " + number];
  } else if (number < 10) {
    return [true, "yalniz reqem daxil edile biler, ededler yox: " + number];
  }

  return [null, ""];
}

function isDiv2(number) {
  if (number % 2 == 0) {
    return `[+]: ${number} 2-ye bolunur.`;
  } else {
    return `[!]: ${number} 2-ye bolunmur.`;
  }
}
function isDiv3(number) {
  const numsOfNum = Array.from(String(number), Number);
  let totalOfNums = 0;
  numsOfNum.map((el) => (totalOfNums += el));

  if (totalOfNums % 3 == 0) {
    return `[+]: ${number} - 3-e bolunur.`;
  } else {
    return `[!]: ${number} - 3-e bolunmur.`;
  }
}

function isDiv4(number) {
  const numsOfNum = Array.from(String(number), Number);
  let lastTwoDigits = numsOfNum.slice(-2).toString();
  lastTwoDigits = parseInt(lastTwoDigits.replace(/,/g, ""));

  if (lastTwoDigits % 4 == 0) {
    return `[+]: ${number} - 4-e bolunur.`;
  } else {
    return `[!]: ${number} - 4-e bolunmur.`;
  }
}

function isDiv5(number) {
  const numsOfNum = Array.from(String(number), Number);
  let lastDigit = numsOfNum.slice(-1).toString();
  lastDigit = parseInt(lastDigit.replace(/,/g, ""));

  if (lastDigit == 0 || lastDigit == 5) {
    return `[+]: ${number} - 5-e bolunur.`;
  } else {
    return `[!]: ${number} - 5-e bolunmur.`;
  }
}

function isDiv6(number) {
  let divTo2 = isDiv2(number);
  let divTo3 = isDiv3(number);

  if (divTo2.search(/bolunur/) != -1 && divTo3.search(/bolunur/) != -1) {
    return `[+]: ${number} - 6-a bolunur.`;
  } else {
    return `[!]: ${number} - 6-a bolunmur.`;
  }
}

function isDiv7(number) {
  const numsOfNum = Array.from(String(number), Number);

  if (numsOfNum.length < 4) {
    return `[-]: gonderilen reqem: "${number}", 7-e bolunme qaydasini pozur, QAYDA: 7-ye bolmek uchun reqemin son 3 reqemi onceki reqemden veya reqemlerden chixmaq lazimdir, yeni minimum reqemin uzunlugu: 4 ola biler.`;
  }

  let lastThreeDigits = numsOfNum.slice(-3).toString();
  lastThreeDigits = parseInt(lastThreeDigits.replace(/,/g, ""));

  let reamingPartOfNum = numsOfNum.slice(0, -3).toString();
  reamingPartOfNum = parseInt(reamingPartOfNum.replace(/,/g, ""));

  console.log("son uch hisse reqemi: ", lastThreeDigits);
  console.log("yerde qalan: ", reamingPartOfNum);

  if (reamingPartOfNum > lastThreeDigits) {
    let result = reamingPartOfNum - lastThreeDigits;

    if (result % 7 == 0) {
      return `[+]: ${number} - 7-ye bolunur.`;
    } else {
      return `[!]: ${number} - 7-ye bolunmur.`;
    }
  } else {
    let result = lastThreeDigits - reamingPartOfNum;

    if (result % 7 == 0) {
      return `[+]: ${number} - 7-ye bolunur.`;
    } else {
      return `[!]: ${number} - 7-ye bolunmur.`;
    }
  }
}

function isDiv8(number) {
  const numsOfNum = Array.from(String(number), Number);

  let lastThreeDigits = numsOfNum.slice(-3).toString();
  lastThreeDigits = parseInt(lastThreeDigits.replace(/,/g, ""));

  if (lastThreeDigits % 8 !== 0) {
    return `[+]: ${number} - 8-e bolunur.`;
  } else {
    return `[!]: ${number} - 8-e bolunmur.`;
  }
}

function isDiv9(number) {
  const numsOfNum = Array.from(String(number), Number);
  let totalOfNums = 0;
  numsOfNum.map((el) => (totalOfNums += el));

  if (totalOfNums % 9 == 0) {
    return `[+]: ${number} - 9-a bolunur.`;
  } else {
    return `[!]: ${number} - 9-a bolunmur.`;
  }
}

function isDiv10(number) {
  const numsOfNum = Array.from(String(number), Number);
  let lastDigit = numsOfNum.slice(-1);

  if (lastDigit == 0) {
    return `[+]: ${number} - 10-a bolunur.`;
  } else {
    return `[-]: ${number} - 10-a bolunmur.`;
  }
}
