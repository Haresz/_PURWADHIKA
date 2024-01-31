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

const camelCaseConvert = (word) => {};
