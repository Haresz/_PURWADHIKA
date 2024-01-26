/* 
    ### FITUR ###
    1. Menampilkan buah - buah
    2. Manambah buah => nama, harga, stock
    3. Menghapus buah 
    4. Membeli buah
    5. Exit

    ### SARAN ###
    1. variabel fruit  berisi array 2D  [nama buah, harga buah, stock]
    2. menggunakan variabel keranjang
*/

let fruit = [
    ['Apple', 10, 100],
    ['Grappe', 18, 100],
    ['Orange', 8, 100]
]

let menusUi = []
let keranjang = []

for (let index = 0; index < fruit.length; index++) {
    menusUi.push('-  ' + fruit[index][0] + '\n')
}

alert(`Welcome to fruit mart :\n${menusUi.join('')}`)

if (confirm('Do you want add menus ?')) {
    let name = prompt('add menu name')
    let price = prompt('add menu price')
    let stock = prompt('add menu stock')
    fruit.push([name, price, stock])
    menusUi.push('-  ' + name + '\n')
    alert(`menus :\n${menusUi.join('')}`)
}

if (confirm('Do you want delete menu?')) {
    let name = prompt('delete menu name')
    let filter;
    let index;
    for (let i = 0; i < fruit.length; i++) {
        filter = fruit[i][0].includes(name)
        index = i
    }
    fruit.splice(index, 1)
    menusUi.splice(index, 1)
    alert(`menus :\n${menusUi.join('')}`)
}

for (let i = 0; i < fruit.length; i++) {
    if (confirm(`do you want to buy ${fruit[i][0]}?`)) {
        let order = prompt(`insert amount ${fruit[i][0]}`)
        let result = fruit[i][2] - order
        while (result < 0) {
            order = prompt(`we dont have ${fruit[i][0]} ${Math.abs(order)}, we have ${fruit[i][2]}`)
            result = fruit[i][2] - order
        }
        fruit.splice(i, 1, [fruit[i][0], fruit[i][1], result])
        keranjang.push([fruit[i][0], fruit[i][1] * order])
        alert(`total subpayment ${fruit[i][0]} : ${fruit[i][1] * order}`)
    }
}

let result = 0
for (let i = 0; i < keranjang.length; i++) {
    result += keranjang[i][1]
}
let payment = parseInt(prompt(`total payment ${result}`))

while (payment < result) {
    payment += parseInt(prompt(`you don't have to pay any more money ${result - payment}`))
}
if (payment > result) {
    alert(`here's your change ${payment - result}`)
}

console.log(payment)

alert('TERIMAKASIH SUDAH BERBELANJA')


