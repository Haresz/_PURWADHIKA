const express = require("express");
const router = express.Router();
const { productsController } = require("../controller");

router.get("/products", productsController.getProducts);

module.exports = router;
