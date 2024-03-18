const express = require("express");
const cors = require("cors"); // librarry untuk memberikan ijin akses dari fe
const bodyParser = require("body-parser"); // menerjemahkan data  body dari fe
const fs = require("fs");

const PORT = 2601;

const app = express();

app.use(cors());
app.use(bodyParser());

app.get("/", (req, res) => {
  res.status(200).send("<h2>Hello express</h2>");
});

app.get("/products", (req, res) => {
  let products = JSON.parse(fs.readFileSync("./data/product.json"));
  res.status(200).send(products);
});

app.post("/products", (req, res) => {
  let products = JSON.parse(fs.readFileSync("./data/product.json"));
  console.log(req.body);
  products.push(req.body);

  fs.writeFileSync("./data/product.json", JSON.stringify(products));

  res.status(200).send(JSON.parse(fs.readFileSync("./data/product.json")));
});

app.patch("/products", (req, res) => {
  let products = JSON.parse(fs.readFileSync("./data/product.json"));
  let index = products.findIndex((item) => item.id == req.query.id);
  console.log(req.body, req.query.id, index);

  for (let prop in products[index]) {
    for (let bodyProp in req.body) {
      if (prop == bodyProp) {
        products[index][prop] = req.body[bodyProp];
      }
    }
  }

  fs.writeFileSync("./data/product.json", JSON.stringify(products));
  res.status(200).send(JSON.parse(fs.readFileSync("./data/product.json")));
});

app.delete("/products", (req, res) => {
  let products = JSON.parse(fs.readFileSync("./data/product.json"));
  let index = products.findIndex((item) => item.id == req.query.id);

  products.splice(index, 1);
  fs.writeFileSync("./data/product.json", JSON.stringify(products));
  res.status(200).send(JSON.parse(fs.readFileSync("./data/product.json")));
});

app.listen(PORT, () => console.log(`server run at ${PORT}`));
