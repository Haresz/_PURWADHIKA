const express = require("express");
const cors = require("cors");

const PORT = 3300;
const app = express();
const { karyawanRouter } = require("./routers/index");

app.use(cors());
app.use(express.json());

app.use("/api", karyawanRouter);

app.listen(PORT, () => console.log("API Running...", PORT));
