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
    number2 % 2 == 0 ? number2 += 1 : number2 = number2
    // MATH CEIL 5
    for (let j = 0; j <= Math.round(number2 / 2) - i; j++) {
        star2 += " *"
        if (i == Math.round(number2 / 2)) {
            break
        }
    }
    if (i >= Math.round(number2 / 2) + 1) {
        for (let k = 1; k <= i - Math.round(number2 / 2) + 1; k++) {
            star2 += " *."
        }
    }
    star2 += "\n"

}


let star = ""
let number = 5

for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i + 1; j++) {
        star += " *"
    } star += "\n"
}

console.log(star2)


//Benr





