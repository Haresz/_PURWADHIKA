let number = 762

const year = Math.floor(number / 360)
number %= 360;
const month = Math.floor(number / 30)
number %= 30;
const week = Math.floor(number / 7)
number %= 7;
const day = number;

console.log(`year: ${year}\nmonth: ${month}\nweek: ${week}\nday: ${day}`)
