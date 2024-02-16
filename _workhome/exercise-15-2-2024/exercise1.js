// A = 1, B = 2, C = 3, D = 4...z = 26
// AA = 27. AB = 28, AC = 29...AZ = 52

const convertExcel = (str) => {
  let strArr = str.split("");
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    for (j = 0; j <= 26; j++) {
      if (strArr[i].toLowerCase() == (j + 10).toString(36)) {
        console.log(result);
        result += (j + 1) * 26 ** i;
        break;
      }
    }
  }
  return console.log(result);
};

convertExcel("AB");
console.log("A".charCodeAt(0) - 1);
