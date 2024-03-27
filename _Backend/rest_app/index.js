const express = require("express");
const cors = require("cors");
const bearerToken = require("express-bearer-token");

const PORT = 3300;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bearerToken());

app.get("/", (req, res) => {
  res.status(200).send("Create API app with express and MYSQL server");
});

const { userRouter } = require("./routes");

app.use("/users", userRouter);

app.listen(PORT, () => console.log("API listening on port :" + PORT));
