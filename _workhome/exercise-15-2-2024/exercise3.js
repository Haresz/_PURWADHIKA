const fnAnagram = (s, t) => {
  let sArr = s.split("");
  let tArr = t.split("");
  for (let i = 0; i <= sArr.length - 1; i++) {
    for (let j = tArr.length - 1; j >= 0; j--) {
      if (sArr[i] === tArr[j]) {
        let index = tArr.indexOf(sArr[i]);
        tArr.splice(index, 1);
      }
    }
  }
  if (tArr.length == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(fnAnagram("rating", "tingra"));
