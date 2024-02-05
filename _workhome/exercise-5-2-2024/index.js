// exercise page 1 number 1
const getLowHightAverage = (arrNum) => {
  let highest = arrNum[0];
  let lowest = arrNum[0];
  let average = 0;
  arrNum.forEach((element) => {
    if (highest < element) {
      highest = element;
    } else if (lowest < element) {
      lowest = element;
    }
    average += element;
  });
  average /= arrNum.length;
  return console.log({ highest: highest, lowest: lowest, average: average });
};

// getLowHightAverage([12, 5, 23, 18, 4, 45, 32]);

// exercise page 1 number 2
const takesAnd = (arrWord) => {
  let result = ``;
  for (let index = 0; index < arrWord.length; index++) {
    const element = arrWord[index];
    if (index === arrWord.length - 1) {
      result += `and ${element}`;
    } else {
      result += `${element},`;
    }
  }
  return console.log(result);
};

// takesAnd(["apple", "banana", "cherry", "date"]);

// exercise page 1 number 3
const splitString = (word) => {
  let result = [];
  let subArr = "";
  for (let index = 0; index < word.length; index++) {
    const element = word[index];
    element !== "" ? (subArr += element) : null;
    if (element === " " || element === word[word.length - 1]) {
      result.push(subArr);
      subArr = "";
    }
  }
  return console.log(result);
};

// splitString(`Hello World`);

// exercise page 1 number 4
const calculateArr = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  return console.log(result);
};

// calculateArr([1, 2, 3], [3, 2, 1]);

// exercise page 1 number 5
const pushArr = (arrNum, num) => {
  const result = arrNum;
  let subArr = 0;
  arrNum.forEach((element) => {
    if (element !== num) {
      subArr += 1;
    }
  });
  if (subArr == arrNum.length) {
    result.push(num);
  }
  return console.log(result);
};

const pushArr2 = (arrNum, num) => {
  const flag = false;
  for (let index = 0; index < arrNum.length; index++) {
    if (array[index] === num) {
      flag = true;
      break;
    }
  }
  flag == false ? arrNum.push(num) : null;
  return console.log(result);
};

// pushArr([1, 2, 3, 4], 4);
// pushArr([1, 2, 3, 4], 7);

// exercise page 2 number 1
const removeOdd = (arrNum) => {
  let result = [];
  arrNum.forEach((element) => {
    if (element % 2 === 0) {
      result.push(element);
    }
  });
  return console.log(result);
};

// removeOdd([1, 2, 3, 4, 5, 6]);

// exercise page 2 number 2
const maxArr = (maxSize, ...num) => {
  const result = [];
  for (let index = 0; index < 5; index++) {
    const element = num[index];
    result.push(element);
  }
  return console.log(result);
};

// maxArr2(5, 5, 10, 24, 3, 6, 7, 8);

// exercise page 2 number 3
const combineArr = (arr1, arr2) => {
  arr2.forEach((element) => {
    arr1.push(element);
  });
  return console.log(arr1);
};

// combineArr([1, 2, 3], [4, 5, 6]);

// exercise page 2 number 4
const findDublicateValue = (arr) => {
  const result = [];
  let num = 0;
  let array = arr.sort();
  array.forEach((element1, index1) => {
    array.forEach((element, index) => {
      if (element == element1 && index != index1 && element != num) {
        num = element;
        result.push(element);
      }
    });
  });
  return console.log(result);
};

// findDublicateValue([1, 2, 2, 2, 3, 3, 4, 5, 5, ]);

const findDifferentArrays = (arr1, arr2) => {
  const array1 = arr1;
  const array2 = arr2;
  for (let i = arr1.length; i >= 0; i--) {
    for (let j = arr2.length - 1; j >= 0; j--) {
      if (arr1[i] == arr2[j]) {
        array2.splice(j, 1);
        array1.splice(i, 1);
      }
    }
  }
  array2.forEach((element) => {
    array1.push(element);
  });
  return console.log(array1);
};

// findDifferentArrays([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);

// page 3 exercise 1
const filterPrimitiveData = (arr) => {
  const array = arr;
  for (let i = arr.length; i >= 0; i--) {
    if (typeof arr[i] == "object") {
      array.splice(i, 1);
    }
  }
  return console.log(arr);
};

// filterPrimitiveData([1, [], undefined, {}, "string", {}, []]);

// page 3 exercise 2
const secondSmalNum = (arr) => {
  let small = [arr[0], 0];
  arr.forEach((element, index) => {
    if (small[0] > element) {
      small[0] = element;
      small[1] = index;
    }
  });
  arr.splice(small[1], 1);
  small = [arr[0], 0];
  arr.forEach((element, index) => {
    if (small[0] > element) {
      small[0] = element;
      small[1] = index;
    }
  });
  return console.log(small[0]);
};

// secondSmalNum([5, 3, 1, 7, 2, 6]);

// page 3 exercise 3
const sumNum = (arr) => {
  let result = 0;
  arr.forEach((element, index) => {
    if (typeof element == "number") {
      result += element;
    }
  });
  return console.log(result);
};
// sumNum(["3", 1, "string", null, false, undefined, 2]);

// page 3 exercise 4
const sumDublicateValue = (arr) => {
  let result = 0;
  let num = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[0]) {
      result += arr[i];
      num = arr[i];
    }
  }
  return console.log(result);
};

// sumDublicateValue([10, 20, 40, 10, 50, 30, 10, 60, 10]);

// page 3 exercise 5
const suits = (value) => {
  const pick = Math.floor(Math.random() * 10 + 1);
  let result = [];
  if (value == "rock") {
    pick % 2 == 0
      ? (result = ["paper", "You Lose"])
      : (result = ["scissor", "You Win"]);
  } else if (value == "paper") {
    pick % 2 == 0
      ? (result = ["rock", "You Win"])
      : (result = ["scissor", "You Lose"]);
  } else if (value == "scissor") {
    pick % 2 == 0
      ? (result = ["rock", "You Lose"])
      : (result = ["paper", "You Win"]);
  }
  return console.log(`${value} vs ${result[0]} *** ${result[1]} ***`);
};

// suits("scissor");
