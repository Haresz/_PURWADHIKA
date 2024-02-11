// const numbers = [11, 22, 34, 41, 52, 63, 71, 86]

// var oodeven = (numbers) => {
//     let even = []
//     let odd = []
//     let result = []
//     numbers.forEach((val) => {
//         if (val % 2 === 0) {
//             even.push(val)
//         }
//         else {
//             odd.push(val)
//         }
//     });
//     result.push(odd, even)
//     return result
// }

// console.table(
//     oodeven(numbers)
// )

// const numbers = [1, 2, 3, 4]

// const arrMap = (arr) => {

//     return resultMap = arr.map((number) => {
//         if (number % 2 === 0) {
//             return [number, "Genap"]
//         } else {
//             return [number, "Ganjil"]
//         }
//     })

// }

// console.table(arrMap(numbers))
// console.log(arrMap(numbers))

// const dataSensus = [
//     ["Johny", 43, "Jakarta"],
//     ["Baby", 21, "Jakarta"],
//     ["Tony", 34, "Surabaya"],
//     ["Justin", 29, "Banjarmasin"]
// ]

// const filterData = (datas) => {
//     return datas.filter((data) => {
//         return data[1] > 30 || data[2] == "Jakarta"
//     })
// }

// console.log(filterData(dataSensus))

// const dataSensus = [
//     ["Johny", 44, "Jakarta"],
//     ["Johny", 43, "Jakarta"],
//     ["Baby", 21, "Jakarta"],
//     ["Tony", 34, "Surabaya"],
//     ["Justin", 29, "Banjarmasin"]
// ]

// console.log(dataSensus.sort())

// console.log("Halo halo")

// const fibonacciNumber = (number) => {
//   let sum = 1;
//   let sum2 = 0;
//   for (let i = 2; i <= number; i++) {
//     sum += sum2;
//     sum2 = sum - sum2;
//   }
//   return sum;
// };

// console.log(fibonacciNumber(4));

// var once = function (fn) {
//   let func = 1;
//   let arr = [];
//   return function (...args) {
//     //   return console.log(fn(args[0], args[1], args[2]));
//     console.log(args);
//   };
// };

// let fn = (a, b, c) => a + b + c;
// let onceFn = once(fn);

// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // returns undefined without calling fn

// function memoize(fn) {
//   let cached = {};
//   return function (...args) {
//     let key = JSON.stringify(args);
//     if (cached[key] && cached[key] == 0) {
//       return cached[key];
//     } else {
//       cached[key] = fn(...args);
//       return cached[key];
//     }
//   };
// }

// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//   console.log(callCount);
//   callCount += 1;
//   return a + b;
// });
// memoizedFn(0, 0); // 5
// memoizedFn(0, 0); // 5
// console.log(callCount); // 1

// var addTwoPromises = async function (promise1, promise2) {
//   return promise1.then((res1) =>
//     promise2.then((res2) => {
//       return res1 + res2;
//     })
//   );
// };

// addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4

// function sleep(millis) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(millis);
//     }, millis);
//   });
// }

// let t = Date.now();
// sleep(100).then(() => console.log(Date.now() - t)); // 100

// console.log(sleep(100).then((r) => console.log(r))); // 100
// console.log(t, Date.now()); //

// let startTime = performance.now();

// Lakukan operasi atau kode yang ingin diukur waktunya

// let endTime = performance.now();
// let elapsedTime = endTime - startTime;

// console.log(`Waktu eksekusi: ${elapsedTime} milidetik`);

// function createDelayedFunction(fn, args, t) {
//   let timeoutId;

//   function cancelFn() {
//     clearTimeout(timeoutId);
//   }

//   timeoutId = setTimeout(() => {
//     if (!cancelFn.called) {
//       fn(...args);
//     }
//   }, t);

//   console.log(cancelFn);

//   cancelFn.called = false;
//   return cancelFn;
// }
// undefined;
// // Contoh penggunaan
// const delayedFunction = createDelayedFunction(
//   (arg1, arg2) => {
//     console.log(`Delayed function executed with args: ${arg1}, ${arg2}`);
//   },
//   [1, "example"],
//   1000
// );

// Panggil cancelFn untuk membatalkan timeout
// delayedFunction();

// var flat = function (arr, n) {
//   let array = arr;
//   let pwr = arr.length;
//   let result = [];
//   let loop = () => {
//     for (let index = 0; index < pwr; index++) {
//       if (typeof array[index] == "object") {
//         result.push(...array[index]);
//       } else {
//         result.push(array[index]);
//       }
//     }
//     array = result;
//   };
//   for (let index = 0; index < n; index++) {
//     pwr = array.length;
//     result = [];
//     loop();
//   }
//   n == 0 ? (result = arr) : result;
//   return console.log(result);
// };

// arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// // console.table([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1);
// flat(arr, 1);

// /**
//  * @param {Object|Array} obj
//  * @return {Object|Array}
//  */
// var compactObject = function (obj) {
//   let res = [];
//   for (const iterator in obj) {
//     if (obj[iterator] && Array.isArray(obj)) {
//       if (Array.isArray(obj[iterator])) {
//         let arr = obj[iterator].filter(
//           (n) =>
//             n !== undefined &&
//             n !== null &&
//             n !== false &&
//             n !== 0 &&
//             n !== "" &&
//             isNaN() != NaN
//         );
//         res.push(arr);
//       } else {
//         res.push(obj[iterator]);
//       }
//     } else {
//       if (obj[iterator]) {
//         console.log(obj[iterator]);
//         res = {};
//         if (Array.isArray(obj[iterator])) {
//           obj[iterator].map((val, i) =>
//             !val ? obj[iterator].splice(obj[iterator].indexOf(val), 1) : val
//           );
//           res[iterator] = obj[iterator];
//         } else {
//           res[iterator] = obj[iterator];
//         }
//       }
//     }
//   }
//   return console.log(res);
// };

// compactObject([null, 0, false, 1]);
// compactObject({ a: null, b: [false, 1] });
// compactObject([null, 0, 5, [0], [false, 16]]);
// compactObject([-1, 0, [0, false], true, null]);
// compactObject({ a: 1, b: 1, c: null, d: "false", e: 0 });
