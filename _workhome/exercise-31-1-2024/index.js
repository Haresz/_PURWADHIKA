const tableMultiple = (number) => {
  let result = "";
  for (let index = 1; index <= 10; index++) {
    result += `${number} x ${index} = ${number * index}\n`;
  }
  return console.log(result);
};

// tableMultiple(9);

const palidromeCheck = (word) => {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    let index = word.length - i;
    if (word[i] != word[index - 1]) {
      return (result = "not palindrome");
      break;
    }
    return (result = "palindrome");
  }
};

// console.log(palidromeCheck("madam"));

const centimaterToKilometer = (number) => {
  return console.log(number / 100000);
};

// centimaterToKilometer(150000);

const convertCurrency = (currency) => {
  return console.log(
    `RP.${new Intl.NumberFormat("en-ID").format(currency)},00`
  );
};

// convertCurrency(5000000);

const removeStringFromSearch = (word, search) => {
  return console.log(word.replace(search, ""));
};

// removeStringFromSearch("Hello world", "ell");

const camelCaseConvert = (word) => {
  let result = "";
  let subWords = "";
  word = word.split(" ");
  for (let index = 0; index < word.length; index++) {
    word[index][0].toLowerCase()
      ? (subWords += word[index][0].toLocaleUpperCase())
      : null;
    for (let j = 1; j < word[index].length; j++) {
      subWords += word[index][j];
    }
    result = result.concat(" ", subWords);
    subWords = "";
  }
  return console.log(result);
};

// camelCaseConvert("hello word press");

const reverseString = (word) => {
  let result = "";
  for (let index = word.length - 1; index >= 0; index--) {
    result += word[index];
  }
  return console.log(result);
};

// reverseString("Hello");

const stringConvert = (word) => {
  let result = "";
  for (let index = 0; index < word.length; index++) {
    word[index] == word[index].toLowerCase()
      ? (result += word[index].toLocaleUpperCase())
      : (result += word[index].toLowerCase());
  }
  return console.log(result);
};

// camelCaseConvert("Hello Word Press");

const findTheLargers = (num1, num2) => {
  return console.log(Math.max(num1, num2));
};

// findTheLargers(190, 99);

const numSmalToBig = (num1, num2, num3) => {
  const numbers = [num1, num2, num3];
  return console.log(
    numbers.sort((a, b) => {
      return a - b;
    })
  );
};

// numSmalToBig(7, 4, 19);

const findTypeData = (data) => {
  let result;
  typeof data == "string"
    ? (result = 1)
    : typeof data == "number"
    ? (result = 2)
    : (result = 3);
  return console.log(result);
};

// findTypeData("word");

const replaceA = (word) => {
  return console.log(word.toLowerCase().replace(/a/g, "*"));
};

replaceA("Halo my name is haris");
