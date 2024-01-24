const stockApel = 10
const stockAnggur = 10
const stockJeruk = 10

const hargaApel = 10000;
const hargaAnggur = 15000;
const hargaJeruk = 20000;

let jmlApel = prompt("Please enter your apple");
let jmlAnggur = prompt("Please enter your grapes");
let jmlJeruk = prompt("Please enter your orange");

if (jmlApel > stockApel) {
    alert(`jumlah stok apel hanya ada ${stockApel},\npesanan anda hanya akan di proses sejumlah tersebut`)
    jmlApel = stockApel
}
if (jmlAnggur > stockAnggur) {
    alert(`jumlah stok angggur hanya ada ${stockAnggur},\npesanan anda hanya akan di proses sejumlah tersebut`)
    jmlAnggur = stockAnggur
}
if (jmlJeruk > stockJeruk) {
    alert(`jumlah stok jeruk hanya ada ${stockJeruk},\npesanan anda hanya akan di proses sejumlah tersebut`)
    jmlJeruk = stockJeruk
}

const tagihan = (jmlApel * hargaApel) + (jmlAnggur * hargaAnggur) + (jmlJeruk * hargaJeruk);

const pembayaran = prompt(`tagihan anda ${tagihan}\nSilahkan masukan pembayaran`)
const result = tagihan - pembayaran

if (result == 0) {
    alert("uang anda pas terimakasih")
    alert("terimakasih sudah belanja")
}
else if (result < 0) {
    alert(`uang anda kurang ${Math.abs(result)}`)
    alert("terimakasih sudah belanja")
}
else if (result > 0) {
    alert(`uang anda lebih ${Math.abs(result)}`)
    alert("terimakasih sudah belanja")
}