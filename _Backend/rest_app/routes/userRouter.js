const express = require("express");
const routers = express.Router();
const { auth } = require("../helper/authToken");
const { userController } = require("../controllers");

routers.get("/get", userController.getData);
routers.post("/register", userController.addData);
routers.patch("/login", userController.editData);
routers.patch("/verify", auth, userController.verification);

module.exports = routers;
