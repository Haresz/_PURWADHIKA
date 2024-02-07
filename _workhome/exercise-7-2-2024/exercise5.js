const factorial = (num) => {
  let result = num;
  for (let i = num - 1; i >= 1; i--) {
    result = result * i;
  }
  return console.log(result);
};

factorial(5);
