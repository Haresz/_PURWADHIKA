const massa = 150
const height = 162

const imt = massa / Math.pow(height, 2)

let result = imt * 10000
result = result.toFixed(1)


if (result <= 18.5) {
    console.log(`IMT anda: ${result}\nBerat badan anda kurang`)
} else if (result > 18.5 && result < 24.9) {
    console.log(`IMT anda: ${result}\nBerat badan anda ideal`)
} else if (result > 25.0 && result < 29.9) {
    console.log(`IMT anda: ${result}\nBerat badan anda berlebihan`)
} else if (result > 30.0 && result < 39.9) {
    console.log(`IMT anda: ${result}\nBerat badan anda sangat berlebihan`)
} else {
    console.log(`IMT anda: ${result}\nBerat badan anda obesitas`)
}