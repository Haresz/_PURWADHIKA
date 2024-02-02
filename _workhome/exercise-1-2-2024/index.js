// Exercise 1
const triangle = (num) => {
  let result = ``;
  let next = 1;
  for (let index = 1; index < num; index++) {
    result += `\n`;
    for (let j = 1; j < index; j++) {
      result += next < 10 ? "0" + `${next} ` : `${next} `;
      next++;
    }
  }
  console.log(result);
};
// triangle(6);

// Exercise 2
const fizzBuzz = (num) => {
  for (let index = 1; index <= num; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("FizzBuzz");
    } else if (index % 3 === 0) {
      console.log("Fizz");
    } else if (index % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(index);
    }
  }
};
fizzBuzz(15);

// Exercise 3
const BMI = (weight, height) => {
  let BMI = weight / height ** 2;
  BMI = BMI * 10000;
  let result = "";
  if (BMI < 18.5) {
    result += "less weight ";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    result += "ideal";
  } else if (BMI >= 25.0 && BMI <= 29.99) {
    result += "overweight";
  } else if (BMI >= 30.0 && BMI <= 39.9) {
    result += "very overweight";
  } else {
    result += "obesity";
  }
  return console.log(result);
};
BMI(55, 160);

const filterOddNumber = (numbers) => {
  return numbers.filter((number) => number % 2 === 0);
};

console.log(filterOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Exercise 5
const splitString = (str) => {
  return str.split(" ");
};

console.log(splitString("Hello world!"));
