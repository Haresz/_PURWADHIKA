const express = require("express");
const cors = require("cors"); // librarry untuk memberikan ijin akses dari fe
const bodyParser = require("body-parser"); // menerjemahkan data  body dari fe
const fs = require("fs");

const PORT = 2601;

const app = express();

app.use(cors());
app.use(bodyParser());

const { productsRouter } = require("./router");

app.use("/data", productsRouter);

app.listen(PORT, () => console.log(`server run at ${PORT}`));
