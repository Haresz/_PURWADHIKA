
const fibonaci = (array) => {
    let arrFibonacci = [1, 1];
    for (let index = 1; index < array - 1; index++) {
        arrFibonacci.push(arrFibonacci[index - 1] + arrFibonacci[index])
    }
    return arrFibonacci
}

console.log(fibonaci(12))