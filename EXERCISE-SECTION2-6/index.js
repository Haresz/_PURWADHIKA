const jarak = 120
const kecepatanA = 60
const kecepatanB = 40
const start = 9

const jmlKecepatan = kecepatanA + kecepatanB // 100
let waktu = jarak / jmlKecepatan // 1.2
waktu = start + waktu
waktu = waktu * 60 // 72
const jam = Math.round(waktu / 60) // 1
waktu = waktu % 60 // 12
const minut = waktu // 12

console.log(`tambrakan akan terjadi pada jam: ${jam}.${minut}`)

