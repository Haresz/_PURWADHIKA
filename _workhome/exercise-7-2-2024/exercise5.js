const factorial = (num) => {
  let result = num;
  let faktorial = `${num}! = ${num} `;
  for (let i = num - 1; i >= 1; i--) {
    result = result * i;
    faktorial += `x ${i} `;
  }
  return console.log(`${faktorial} = ${result}`);
};

factorial(5);
