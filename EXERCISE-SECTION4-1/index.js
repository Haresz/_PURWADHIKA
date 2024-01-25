// Bentuk satu
// let star = ""
// let number = 5

// for (let i = 1; i <= number; i++) {
//     for (let j = 0; j <= number - i; j++) {
//         star += " *"
//     } star += "\n"
// }

// console.log(star)

// Bentuk Dua
let star2 = ""
let number2 = 10

for (let i = 1; i <= number2; i++) {
    for (let j = 0; j <= Math.ceil(number2 / 2) - i; j++) {
        star2 += " *"
        if (i == Math.ceil(number2 / 2)) {
            break
        }
    }
    if (i >= Math.ceil(number2 / 2)) {
        for (let k = 1; k <= i - Math.ceil(number2 / 2); k++) {
            star2 += " *"
        }
    }
    star2 += "\n"
}

console.log(star2)





