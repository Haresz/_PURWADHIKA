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

let keranjang = []

const menus = (message) => {
    let result = ''
    fruit.forEach(element => {
        result += '-  ' + element[0] + '\n'
    });
    return alert(`${message} :\n${result}`)
}

menus(`Welcome to fruit mart`)

if (confirm('Do you want add menus ?')) {
    let name = prompt('add menu name')
    let price = prompt('add menu price')
    let stock = prompt('add menu stock')
    fruit.push([name, price, stock])
    menus('menus')
}

if (confirm('Do you want delete menu?')) {
    let name = prompt('delete menu name')
    fruit.forEach((currentValue, index, arr) => {
        filter = currentValue[0].includes(name)
        if (filter) {
            fruit.splice(index, 1)
        }
    });
    menus('menus')
}

const subTotal = (a, b) => {
    return a * b
}

fruit.forEach((element, index, arr) => {
    console.log(element)
    if (confirm(`do you want to buy ${element[0]}?`)) {
        let order = prompt(`insert amount ${element[0]}`)
        let result = element[2] - order
        while (result < 0) {
            order = prompt(`we dont have ${element[0]} ${Math.abs(order)}, we have ${element[2]}`)
            result = element[2] - order
        }
        fruit.splice(index, 1, [element[0], element[1], result])
        keranjang.push([element[0], subTotal(element[1], order)])
        alert(`total subpayment ${element[0]} : ${subTotal(element[1], order)}`)
    }
});

const detail = () => {
    let result = 'belanjaan anda meliputi :'
    keranjang.forEach((element) => {
        return result += `\n${element[0]}, ${element[1]}`
    })
    return result
}

alert(detail())
console.log(detail())


let result = 0

keranjang.forEach(element => {
    result += element[1]
});

let payment = parseInt(prompt(`total payment ${result}`))

while (payment < result) {
    payment += parseInt(prompt(`you don't have to pay any more money ${result - payment}`))
}
if (payment > result) {
    alert(`here's your change ${payment - result}`)
}

alert('TERIMAKASIH SUDAH BERBELANJA')


