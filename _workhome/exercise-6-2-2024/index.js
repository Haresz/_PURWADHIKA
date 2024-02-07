let studentArr = [
  {
    name: "Samsul",
    email: "samsul@gmail.com",
    age: new Date("2002-03-25"),
    score: 98,
  },
  {
    name: "Alya",
    email: "alya@gmail.com",
    age: new Date("1995-08-12"),
    score: 85,
  },
  {
    name: "Budi",
    email: "budi@gmail.com",
    age: new Date("1987-05-03"),
    score: 75,
  },
  {
    name: "Dhani",
    email: "dhani@gmail.com",
    age: new Date("2001-09-09"),
    score: 80,
  },
  {
    name: "Hadi",
    email: "hadi@gmail.com",
    age: new Date("2004-01-08"),
    score: 99,
  },
];

let cart = [];

function calculate(arr) {
  let highestScore = arr[0].score;
  let lowestScore = arr[0].score;
  let averageScore = 0;
  let highestAge = arr[0].age;
  let lowestAge = arr[0].age;
  let averageAge = 0;
  arr.forEach((element) => {
    let age = new Date().getFullYear() - element.age.getFullYear();
    element.score > highestScore
      ? (highestScore = element.score)
      : element.score < lowestScore
      ? (lowestScore = element.score)
      : element.score;
    averageScore += element.score;
    element.age < highestAge
      ? (highestAge = age)
      : element.age > lowestAge
      ? (lowestAge = age)
      : element.age;
    averageAge += age;
  });
  averageScore /= arr.length;
  averageAge /= arr.length;
  return console.log({
    score: { highestScore, lowestScore, averageScore },
    age: { highestAge, lowestAge, averageAge },
  });
}

// calculate(studentArr);

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.total = 0;
    this.products = [];
  }

  addCart(product, qty) {
    this.total += product.price * qty;
    this.products.push({ product: product.name, qty: qty });
  }

  showTotal() {
    console.log(`Total: $${this.total}`);
  }

  checkout() {
    return { total: this.total, products: this.products };
  }
}

let Chair = new Product("chair", 12);
let Table = new Product("table", 20);

let Pay = new Transaction();
Pay.addCart(Chair, 1);
Pay.addCart(Table, 1);

Pay.showTotal();
console.log(Pay.checkout());

array.forEach((element) => {});
