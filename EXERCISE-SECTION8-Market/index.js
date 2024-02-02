let products = [
  {
    id: "0.6556417281250533",
    category: "Fruit",
    name: "Apple",
    price: 10,
    stock: 100,
    sugarLevel: "Normal",
  },
  {
    id: "0.8082925670480676",
    category: "Fast Food",
    name: "Humberger",
    price: 5,
    stock: 100,
    rangeOfYear: "02-02-2024 - 02-03-2024",
  },
  {
    id: "0.21867652146090322",
    category: "Cloth",
    name: "T-shirt",
    price: 12,
    stock: 100,
    size: "M",
  },
  {
    id: "0.0696338121907929",
    category: "Electronic",
    name: "Laptop",
    price: 120,
    stock: 80,
    warranty: true,
  },
];
let cartData = [];

const categoryList = ["Fruit", "Fast Food", "Cloth", "Electronic"];
let categorys = "<option value=''>ALL</option>";
let categorysINput = "";
categoryList.map((category) => {
  categorys += `<option value="${category}">${category}</option>`;
  categorysINput += `<option value="${category}">${category}</option>`;
});
document.getElementById("category").innerHTML = categorys;
document.getElementById("categoryInput").innerHTML = categorysINput;

const displayProducts = (arr) => {
  let resultArray = [];
  arr.forEach((product) => {
    resultArray.push(`
    <tr>
      <td>${product.id}</td>
      <td>${product.category}</td>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.stock}</td>
      <td><input type="button" value="Add" onclick="addCart(${product.id})"/></td>
      <td><input type="button" value="Delete" onclick="deleteData(${product.id})"/></td>
      <td><input type="button" value="Edit" onclick="editData(${product.id})"/></td>
    </tr>
    `);
  });
  document.getElementById("resultData").innerHTML = resultArray.join("");
  return resultArray;
};
displayProducts(products);

const filterName = () => {
  const name = document.getElementById("name").value;
  document.getElementById("category").value = "";
  document.getElementById("min").value = "";
  document.getElementById("max").value = "";
  const result = products.filter((product) => {
    if (product.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
      return product;
    }
  });
  displayProducts(result);
};

const filterPrice = () => {
  const min = document.getElementById("min").value;
  const max = document.getElementById("max").value;
  document.getElementById("name").value = "";
  document.getElementById("category").value = "";
  let result;
  if (min !== "" && max !== "") {
    result = products.filter((product) => {
      if (parseInt(min) <= product.price && parseInt(max) >= product.price) {
        return product;
      }
    });
  } else {
    displayProducts(products);
  }

  displayProducts(result);
};

const filterCategory = () => {
  const category = document.getElementById("category").value;
  document.getElementById("name").value = "";
  document.getElementById("min").value = "";
  document.getElementById("max").value = "";
  let result = products.filter((product) => {
    if (product.category.includes(category)) {
      return product;
    }
  });
  displayProducts(result);
};

const reset = () => {
  document.getElementById("name").value = "";
  document.getElementById("min").value = "";
  document.getElementById("max").value = "";
  document.getElementById("category").value = "";
  displayProducts(products);
};

const inputData = () => {
  const id = Math.random();
  const name = document.getElementById("nameInput").value;
  const price = document.getElementById("priceInput").value;
  const category = document.getElementById("categoryInput").value;
  const stock = document.getElementById("stockInput").value;
  products.push({ id, name, price, category, stock });
  displayProducts(products);
};

const deleteData = (id) => {
  const index = products.findIndex((x) => x.id == id);
  products.splice(index, 1);
  displayProducts(products);
};

const saveData = (id) => {
  const index = products.findIndex((x) => x.id == id);
  const name = document.getElementById("nameEdit").value;
  const price = document.getElementById("priceEdit").value;
  const stock = document.getElementById("stockEdit").value;
  products.splice(index, 1, {
    id,
    category: products[index].category,
    name,
    price,
    stock,
  });
  displayProducts(products);
};

const editData = (id) => {
  const index = products.findIndex((x) => x.id == id);
  let resultArray = [];
  products.forEach((product) => {
    resultArray.push(`
    <tr>
      <td>${product.id}</td>
      <td>${product.category}</td>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.stock}</td>
      <td><input type="button" value="Add" onclick="addCart(${product.id})"/></td>
      <td><input type="button" value="Delete" onclick="deleteData(${product.id})"/></td>
      <td><input type="button" value="Edit" onclick="editData(${product.id})"/></td>
    </tr>
    `);
  });
  resultArray[index] = `<tr>
  <td>${products[index].id}</td>
    <td>${products[index].category}</td>
    <td><input value=${products[index].name} type="text" id="nameEdit" placeholder="Name" /></td>
    <td><input value=${products[index].price} type="text" id="priceEdit" placeholder="Price" /></td>
    <td><input value=${products[index].stock} type="text" id="stockEdit" placeholder="Stock" /></td>
    <td><input type="button" value="Add" disabled/></td>
    <td><input type="button" value="Delete" disabled/></td>
    <td><input type="button" value="Save" onclick="saveData(${products[index].id})"/></td>
  </tr>`;
  document.getElementById("resultData").innerHTML = resultArray.join("");
};

const addCart = (id) => {
  const index = products.findIndex((x) => x.id == id);
  let stock = products[index].stock - 1;
  products.splice(index, 1, {
    id,
    category: products[index].category,
    name: products[index].name,
    price: products[index].price,
    stock,
  });
  const cartIndex = cartData.findIndex((x) => x.id == products[index].id);
  console.log(cartData);
  if (cartIndex == -1) {
    cartData.push({
      id,
      category: products[index].category,
      name: products[index].name,
      price: products[index].price,
      Qty: 1,
    });
  } else {
    cartData.splice(cartIndex, 1, {
      id,
      category: products[index].category,
      name: products[index].name,
      price: products[index].price,
      Qty: cartData[cartIndex].Qty + 1,
    });
  }
  console.log(cartIndex);
  displayProducts(products);
  displayCart(cartData);
};

const displayCart = (arr) => {
  let resultCart = [];
  arr.forEach((cart) => {
    resultCart.push(`
    <tr>
      <td>${cart.id}</td>
      <td>${cart.category}</td>
      <td>${cart.name}</td>
      <td>${cart.price}</td>
      <td>${cart.Qty}</td>
      <td><input type="button" value="Delete" onclick="deleteCart(${cart.id})" /></td>
    </tr>`);
  });
  document.getElementById("cartBody").innerHTML = resultCart.join("");
};

const deleteCart = (id) => {
  const index = cartData.findIndex((x) => x.id == id);
  cartData[index].Qty == 1
    ? cartData.splice(index, 1)
    : cartData.splice(index, 1, {
        id,
        category: products[index].category,
        name: products[index].name,
        price: products[index].price,
        Qty: cartData[index].Qty - 1,
      });
  displayCart(cartData);
};

const payment = () => {
  const detailPayment = document.getElementById("detailPayment");
  let result = ``;
  let subTotal = 0;
  cartData.forEach((x) => {
    subTotal += x.price * x.Qty;
    result += `${x.category} | ${x.name} | ${x.price} x ${x.Qty} = ${
      x.price * x.Qty
    } <br /><br />`;
  });
  let ppn = (subTotal * 5) / 100;
  result += `\n <h3>Subtotal : ${subTotal}</h3>
            \n <h3>PPN : ${ppn}</h3>
            \n <h3>Total : ${subTotal + ppn}</h3>`;
  detailPayment.innerHTML = result;
};
