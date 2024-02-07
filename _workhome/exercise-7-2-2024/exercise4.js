function switchValueProperty(obj) {
  let result = [{}];
  for (const iterator of obj) {
    for (const key in iterator) {
      result[0][iterator[key]] = key;
    }
  }

  return console.log(result);
}

switchValueProperty([{ name: "David", age: 20 }]);
