const compareObj = (obj1, obj2) => {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return onsole.log(false);
  } else {
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return console.log(false);
      }
    }
  }
  return console.log(true);
};

compareObj({ a: 2 }, { a: 1 });
compareObj({ a: "Hello" }, { a: 1 });
compareObj({ a: 1 }, { a: 1 });
