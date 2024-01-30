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

let fruits = [
    { name: 'Apple', price: 10, stock: 100 },
    { name: 'Grappe', price: 18, stock: 100 },
    { name: 'Orange', price: 8, stock: 100 }
]

let keranjang = []

let result = 0
const menus = () => {
    let result = ''
    fruits.forEach((element, index) => {
        result += `${index}. ${element.name}, price : ${element.price}, stock: ${element.stock}\n`
    });
    return `menus :\n${result}`
}

const detail = () => {
    let result = 'belanjaan anda meliputi :'
    keranjang.forEach((element) => {
        return result += `\n${element.name}, ${element.subTotal}`
    })
    return result
}

const payment = () => {
    keranjang.forEach(element => {
        result += element.subTotal
    });
    let payment = parseInt(prompt(`${detail()}\ntotal payment ${result}`))
    while (payment < result) {
        payment += parseInt(prompt(`you don't have to pay any more money ${result - payment}`))
    }
    if (payment > result) {
        alert(`here's your change ${payment - result}`)
    }
    console.log(keranjang)
}

const buyFruits = () => {
    let yourFruit = prompt(`${menus()}\nwhat do you want? inset number`)
    let { name, price, stock } = fruits[yourFruit]
    let order = prompt(`insert amount ${name}, price ${price}, stock ${stock}`)
    let result = stock - order
    while (result < 0) {
        order = prompt(`we dont have ${name} ${Math.abs(order)}, we have ${stock}`)
        result = stock - order
    }
    let decision = prompt(`anything else ?, yes / no`)
    fruits[yourFruit].stock = result
    keranjang.push({ name: name, price: price, order: result, subTotal: price * result })
    console.log(keranjang)
    while (decision === 'yes') {
        buyFruits()
    }
    payment()
    fitur()
}

function fitur() {
    const select = prompt('what do you want to :\n1. Fruits Menus\n2. Add fruit\n3. Delete fruit\n4. buy fruit\n5. exit\n insert menu number')
    if (select == 1) {
        alert(menus())
        fitur()
    } else if (select == 2) {
        let name = prompt('add menu name')
        let price = prompt('add menu price')
        let stock = prompt('add menu stock')
        fruits.push({ name: name, price: price, stock: stock })
        alert(menus())
        fitur()
    } else if (select == 3) {
        let name = prompt(`delete menu name\n${menus()}`)
        fruits.forEach((currentValue, index, arr) => {
            filter = currentValue.name.includes(name)
            if (filter) {
                fruits.splice(index, 1)
            }
        });
        alert(menus())
        fitur()
    } else if (select == 4) {
        buyFruits()
    } else {
        alert('Thank you for visiting')
    }
}

fitur()




