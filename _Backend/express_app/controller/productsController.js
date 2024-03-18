const fs = require("fs");

module.exports = {
  getProducts: (req, res) => {
    product = fs.readFileSync("../data/product.json");
    res.status(200).send(JSON.parse(product));
  },
};
