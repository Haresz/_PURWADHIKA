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
// let star2 = ""
// let number2 = 10

// for (let i = 1; i <= number2; i++) {
//     number2 % 2 == 0 ? number2 += 1 : number2 = number2
//     // MATH CEIL 5
//     for (let j = 0; j <= Math.round(number2 / 2) - i; j++) {
//         star2 += " *"
//         if (i == Math.round(number2 / 2)) {
//             break
//         }
//     }
// if (i >= Math.round(number2 / 2) + 1) {
//     for (let k = 1; k <= i - Math.round(number2 / 2) + 1; k++) {
//         star2 += " *."
//     }
// }
//     star2 += "\n"

// }

//Bentuk 3

let star3 = ""
let number3 = 9

for (let i = 1; i <= number3; i++) {

    for (let j = 0; j <= number3 - i; j++) {
        star3 += "   "
    }

    for (let k = 1; k <= i * 2 - 1; k++) {
        star3 += ""
        star3 += " * "
        star3 += ""
    } star3 += "\n"
}

console.log(star3)

// Bentuk 4

let star4 = ""
let number4 = 9

for (let i = 0; i <= number4; i++) {

    for (let j = 0; j <= i; j++) {
        star4 += "   "
    }

    for (let k = 0; k <= (number4 * 2 - 1) - (i * 2 + 1); k++) {
        star4 += " * "
    } star4 += "\n"
}

console.log(star4)

// Bentuk 5

let star5 = ""
let number5 = 10

for (let i = 1; i <= number5; i++) {
    number5 % 2 == 1 ? number5 += 1 : number5 = number5
    if (i <= Math.round(number5 / 2)) {
        for (let j = 0; j <= number5 - i; j++) {
            star5 += "   "
        }

        for (let k = 1; k <= i * 2 - 1; k++) {
            star5 += ""
            star5 += " * "
            star5 += ""
        } star5 += "\n"
    }
    if (i >= Math.round(number5 / 2)) {
        for (let j = 0; j <= i; j++) {
            star5 += "   "
        }

        for (let k = 0; k <= (number5 * 2 - 1) - (i * 2 + 1); k++) {
            star5 += " * "
        } star5 += "\n"
    }

}

console.log(star5)




