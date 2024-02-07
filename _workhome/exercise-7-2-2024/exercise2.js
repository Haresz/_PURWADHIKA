const getSameObj = (obj1, obj2) => {
  let result = [];
  for (const key in obj1 || obj2) {
    if (obj1[key] === obj2[key]) {
      result.push({ [key]: obj1[key] });
    }
  }
  return console.log(result);
};

getSameObj({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3, d: 4 });
