const stockApel = 10
const stockAnggur = 10
const stockJeruk = 10

const hargaApel = 10000;
const hargaAnggur = 15000;
const hargaJeruk = 20000;

let jmlApel = prompt("Please enter your apple");
while (jmlApel > stockApel) {
    alert(`jumlah stok apel hanya ada ${stockApel},\nmasukan pesanan sesuai stock!`)
    jmlApel = prompt("Please enter your apple");
}
let jmlAnggur = prompt("Please enter your grapes");
while (jmlAnggur > stockAnggur) {
    alert(`jumlah stok anggur hanya ada ${stockAnggur},\nmasukan pesanan sesuai stock!`)
    jmlAnggur = prompt("Please enter your grapes");
}
let jmlJeruk = prompt("Please enter your orange");
while (jmlJeruk > stockJeruk) {
    alert(`jumlah stok jeruk hanya ada ${stockJeruk},\nmasukan pesanan sesuai stock!`)
    jmlJeruk = prompt("Please enter your orange");;
}

const tagihan = (jmlApel * hargaApel) + (jmlAnggur * hargaAnggur) + (jmlJeruk * hargaJeruk);
let pembayaran = prompt(`tagihan anda ${tagihan}\nSilahkan masukan pembayaran`)
let result = pembayaran - tagihan

while (result < 0) {
    alert(`uang anda kurang ${Math.abs(result)}`)
    pembayaran = prompt(`tagihan anda ${Math.abs(result)}\nSilahkan masukan pembayaran`)
    result = pembayaran - Math.abs(result)
}

console.log(result)

if (result == 0) {
    alert("uang anda pas terimakasih")
}
else if (result > 0) {
    alert(`uang anda lebih ${Math.abs(result)}`)
}
alert("terimakasih sudah belanja")
