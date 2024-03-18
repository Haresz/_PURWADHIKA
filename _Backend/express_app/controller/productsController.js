const fs = require("fs");

module.exports = {
  getProducts: (req, res) => {
    product = fs.readFileSync("./data/product.json");
    res.status(200).send(JSON.parse(product));
  },
  getProductId: (req, res) => {
    product = JSON.parse(fs.readFileSync("./data/product.json"));
    index = product.findIndex((item) => item.id == req.params.id);

    res.status(200).send(JSON.stringify(product[index]));
  },
  addProducts: (req, res) => {
    product = JSON.parse(fs.readFileSync("./data/product.json"));
    product.push(req.body);

    fs.writeFileSync("./data/product.json", JSON.stringify(product));
    res.status(200).send(JSON.parse(fs.readFileSync("./data/product.json")));
  },
  editProduct: (req, res) => {
    product = JSON.parse(fs.readFileSync("./data/product.json"));
    index = product.findIndex((item) => item.id == req.query.id);

    for (const key in product[index]) {
      for (const key2 in req.body) {
        if (key === key2) {
          product[index][key] = req.body[key2];
        }
      }
    }

    fs.writeFileSync("./data/product.json", JSON.stringify(product));
    res.status(200).send(JSON.parse(fs.readFileSync("./data/product.json")));
  },
  deleteProduct: (req, res) => {
    product = JSON.parse(fs.readFileSync("./data/product.json"));
    index = product.findIndex((item) => item.id == req.query.id);

    product.splice(index, 1);
    fs.writeFileSync("./data/product.json", JSON.stringify(product));
    res.status(200).send(JSON.parse(fs.readFileSync("./data/product.json")));
  },
};
