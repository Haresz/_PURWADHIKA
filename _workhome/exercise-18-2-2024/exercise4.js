function profit(arr) {
  let max = 0;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      max = arr[i + 1] - min;
      arr[i] < min ? (min = arr[i]) : min;
    }
  }
  console.log(max);
}

profit([7, 1, 5, 3, 6, 4]);
profit([7, 6, 4, 3, 1]);
