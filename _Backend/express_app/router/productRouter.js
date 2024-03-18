const express = require("express");
const router = express.Router();
const { productsController } = require("../controller");

router.get("/products", productsController.getProducts);
router.get("/products/:id", productsController.getProductId);
router.post("/products", productsController.addProducts);
router.patch("/products", productsController.editProduct);
router.delete("/products", productsController.deleteProduct);

module.exports = router;
