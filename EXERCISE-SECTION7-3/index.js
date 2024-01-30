const months = ["January", "Februay", "March", "April", "May", "June", "July", "August", "September", "Oktober", "November", "Desember"]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date()

const result = `Today is ${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}\no'clock ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
console.log(result)
