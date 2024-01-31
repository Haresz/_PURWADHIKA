/* 
    ### ALGORITHM ###
    1. Masuk Aplikasi
    2. Pilih Menu
        1. Menampilkan product
            -> menampilkan product
            -> back menu
        2. Manambah products
            -> menampilkan category && pilih caategory yang mau di tambahkan 
            -> mengisi isi value product sesuai category && menampilkan product caategory
            -> push object ke array products
            -> menampilkan product caategory
            -> back menu
        3. Menghapus products
            -> menampilkan product && mengisi value name yang akan di hapus 
            -> menampilkan product
        4. Membeli products
            -> menampilkan category products && insert category yang di pilih
            -> menampilkan product sesuai category yang di pilih && insert product yang di beli
            -> mendapatkan data product
            # order
            -> insert jumlah order (order, stock, index)
            -> while(stock < order){
                    -> insert order
               }
            -> kuraangi stock
            -> masukan orderan ke keranjang (name, price, order, subtotal)
            -> if(confirm('masih ingin belanja  ?')){
                    -> back to membeli product
               }
            #payment
            -> menjumlahkan total dari subtotal yang berada di keranjang
            -> inset total yang harus di bayarkan
            -> while(total < cash){
                    -> insert order
               }
            -> back to pilih menu
        5. Exit
            -> alert('thank you for visiting')

    ### SARAN ###
    1. variabel fruit  berisi array 2D  [nama buah, harga buah, stock]
    2. menggunakan variabel keranjang

    ## PENGGUNAAN CLASS ###
    PARENT CLASS => PRODUCT(category, name, price, stock)
        1. FAST FOOD => RANGE OF YEAR : number 
        2. CLOTH => SIZE : string (S, M, L, XL)
        3. ELECTRONIC => WARRANTY : boolean 
        4. FRUITS => SUGAR LEVEL : string (Low, Normal, High)
*/

let products = [
  {
    category: "fruit",
    name: "Apple",
    price: 10,
    stock: 100,
    sugarLevel: "Normal",
  },
  {
    category: "fruit",
    name: "Grappe",
    price: 18,
    stock: 100,
    sugarLevel: "Hight",
  },
  {
    category: "fruit",
    name: "Orange",
    price: 8,
    stock: 100,
    sugarLevel: "Low",
  },
  {
    category: "fast-food",
    name: "Humberger",
    price: 5,
    stock: 100,
    rangeOfYear: "02-02-2024 - 02-03-2024",
  },
  { category: "cloth", name: "T-shirt", price: 12, stock: 100, size: "M" },
  {
    category: "electronic",
    name: "Laptop",
    price: 120,
    stock: 80,
    warranty: true,
  },
];

const keranjang = [];

class Product {
  constructor(category, name, price, stock) {
    this.category = category;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

class Order extends Product {
  constructor(category, name, price, stock, order, subTotal) {
    super(category, name, price, stock);
    this.order = order;
    this.subTotal = subTotal;
  }
}

class FastFood extends Product {
  constructor(category, name, price, stock, rangeOfYear) {
    super(category, name, price, stock);
    this.rangeOfYear = rangeOfYear;
  }
}

class Cloth extends Product {
  constructor(category, name, price, stock, size) {
    super(category, name, price, stock);
    this.size = size;
  }
}

class Electronic extends Product {
  constructor(category, name, price, stock, warranty) {
    super(category, name, price, stock);
    this.warranty = warranty;
  }
}

class Fruit extends Product {
  constructor(category, name, price, stock, sugarLevel) {
    super(category, name, price, stock);
    this.sugarLevel = sugarLevel;
  }
}

const display = () => {
  let result = "";
  products.forEach(function (product) {
    result += `- category : ${product.category}, name : ${product.name}, price : ${product.price}, stock : ${product.stock}\n`;
  });
  return result;
};

const displayCategory = (category, uniq) => {
  let result = "";
  products.filter((product) => {
    product.category == category
      ? (result += `- category : ${product.category}, name : ${
          product.name
        }, price : ${product.price}, stock : ${product.stock}, ${uniq} : ${
          product.sugarLevel ||
          product.rangeOfYear ||
          product.size ||
          product.warranty
        }\n`)
      : null;
  });
  return result;
};

const addProduct = (category, name, price, stock, uniq) => {
  let product;
  category == "fruit"
    ? (product = new Fruit("fruit", name, price, stock, uniq))
    : category == "fast-food"
    ? (product = new FastFood("food", name, price, stock, uniq))
    : category == "cloth"
    ? (product = new Cloth("cloth", name, price, stock, uniq))
    : category == "electronic"
    ? (product = new Electronic("electronic", name, price, stock, uniq))
    : alert("category invalid");
  products.push(product);
};

const removeProduct = (name) => {
  products.forEach((element, index) => {
    if (element.name.includes(name)) {
      products.splice(index, 1);
    }
  });
};

const detail = () => {
  let result = "belanjaan anda meliputi :";
  keranjang.forEach((element) => {
    return (result += `\n${element.name}, ${element.subTotal}`);
  });
  return result;
};

const payment = () => {
  let result = 0;
  keranjang.forEach((element) => {
    result += element.subTotal;
    console.log(element.subTotal);
  });
  console.log(result);
  let payment = parseInt(prompt(`${detail()}\ntotal payment ${result}`));
  while (payment < result) {
    payment += parseInt(
      prompt(`you don't have to pay any more money ${result - payment}`)
    );
  }
  if (payment > result) {
    alert(`here's your change ${payment - result}`);
  }
};

const categoryList = (category) => {
  category == 1
    ? (category = "cloth")
    : category == 2
    ? (category = "electronic")
    : category == 3
    ? (category = "fast-food")
    : category == 4
    ? (category = "fruit")
    : (category = invalid);
  return category;
};

const buyProduct = () => {
  let categoryName = prompt(
    `What category do you want add ?\n\n1. Cloth\n2. Electronic\n3. Fast Food\n4. Fruit\n\n Insert category number`
  );
  categoryName = categoryList(categoryName);
  let categoryUniq = "";
  categoryName == "cloth"
    ? (categoryUniq = "size")
    : categoryName == "fruit"
    ? (categoryUniq = "sugarLevel")
    : categoryName == "electronic"
    ? (categoryUniq = "warranty")
    : categoryName == "fast-food"
    ? (categoryUniq = "rangeOfYear")
    : null;
  let product = prompt(
    `pilih product yang anda pilih\n\n${displayCategory(
      categoryName,
      categoryUniq
    )}\n\nInsert product name`
  );
  let indexNumber = 0;
  products.forEach((element, index) => {
    if (element.name.includes(product)) {
      product = element;
      indexNumber += index;
    }
  });
  let order = prompt("how much order do you want ?");
  while (product.stock < order) {
    order = prompt(
      `your order is over : ${order}, stock : ${product.stock}\ninsert stock again`
    );
  }
  let { category, name, price, stock } = products[indexNumber];
  product.stock = stock - order;
  keranjang.push(
    new Order(category, name, price, product.stock, order, price * order)
  );
  let decision = prompt(`anything else ?, yes / no`);
  if (decision === "yes") {
    buyProduct();
  }
  payment();
  menus();
};

function menus() {
  const select = prompt(
    "what do you want to :\n1. Product Menus\n2. Add product\n3. Delete product\n4. Buy product\n5. exit\n insert menu number"
  );

  if (select == 1) {
    alert(display());
    menus();
  } else if (select == 2) {
    let category = prompt(
      `What category do you want add ?\n\n1. Cloth\n2. Electronic\n3. Fast Food\n4. Fruit\n\n Insert category number`
    );
    category = categoryList(category);
    let categoryUniq = "";
    category == "cloth"
      ? (categoryUniq = "size")
      : category == "fruit"
      ? (categoryUniq = "sugarLevel")
      : category == "electronic"
      ? (categoryUniq = "warranty")
      : category == "fast-food"
      ? (categoryUniq = "rangeOfYear")
      : null;
    const name = prompt(
      `list product :\n ${displayCategory(
        category,
        categoryUniq
      )}\n\nInsert your product name`
    );
    const price = prompt(
      `list product :\n ${displayCategory(
        category,
        categoryUniq
      )}\n\nInsert your product price`
    );
    const stock = prompt(
      `list product :\n ${displayCategory(
        category,
        categoryUniq
      )}\n\nInsert your product stock`
    );
    const uniq = prompt(
      `list product :\n ${displayCategory(
        category,
        categoryUniq
      )}\n\nInsert your product ${categoryUniq}`
    );
    addProduct(category, name, price, stock, uniq);
    alert(displayCategory(category, categoryUniq));
    menus();
  } else if (select == 3) {
    let name = prompt(`delete menu name \n${display()}`);
    removeProduct(name);
    alert(display());
    menus();
  } else if (select == 4) {
    buyProduct();
  } else if (select == 5) {
    alert("Thanks for visiting");
  } else {
    alert("your choice invalid");
  }
}

menus();
