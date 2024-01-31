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

const fibonacciNumber = (number) => {
  let sum = 1;
  let sum2 = 0;
  for (let i = 2; i <= number; i++) {
    sum += sum2;
    sum2 = sum - sum2;
  }
  return sum;
};

console.log(fibonacciNumber(4));
