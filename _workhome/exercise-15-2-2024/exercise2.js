const filterNonEmptyArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[i] === arr[j] && i !== j) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return console.log(arr);
};

filterNonEmptyArray([2, 2, 1]);
filterNonEmptyArray([4, 1, 2, 1, 2]);
filterNonEmptyArray([1]);
