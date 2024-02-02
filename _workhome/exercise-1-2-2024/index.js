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
triangle(6);
