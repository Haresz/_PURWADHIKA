function majorityArr(arr) {
  let array = arr.sort();
  let qty = 0;
  let numMajority = { num: 0, qty: 0 };
  array.forEach((e, i) => {
    if (e == arr[i + 1] || e == arr[-1]) {
      qty = qty + 1;
    } else {
      qty = 0;
    }
    if (qty > numMajority.qty) {
      numMajority.num = e;
      numMajority.qty = qty;
    }
  });
  console.log(numMajority.num);
}

majorityArr([2, 2, 1, 1, 1, 2, 2]);
// majorityArr([3, 2, 3]);
