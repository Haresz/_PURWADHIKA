function pascalTriangle(num) {
  let res = [];
  let subArr = [];
  for (let index = 1; index <= num; index++) {
    subArr = [];
    for (let j = 1; j <= index; j++) {
      if (j == 1 || j == index) {
        subArr.push(1);
      } else {
        subArr.push(res[index - 2][j - 1] + res[index - 2][j - 2]);
      }
    }
    res.push(subArr);
  }
  return console.log(res);
}

pascalTriangle(5);
