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

app.listen(PORT, () => console.log(`server run at ${PORT}`));
