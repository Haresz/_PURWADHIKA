function RomawiNum(num) {
  let numRomawi = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let arr = num.split("");
  let result = 0;
  for (let index = 0; index < arr.length; index++) {
    if (numRomawi[arr[index]] < numRomawi[arr[index + 1]]) {
      result += numRomawi[arr[index + 1]] - numRomawi[arr[index]];
      index += 1;
    } else {
      result += numRomawi[arr[index]];
    }
  }
  console.log(result);
}

RomawiNum("LVIII");
