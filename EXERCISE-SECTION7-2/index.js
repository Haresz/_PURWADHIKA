const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date = new Date();
let month = months[date.getMonth()]
const result = `Saat ini bulan ${date.getMonth() + 1} : ${month}`
console.log(result)