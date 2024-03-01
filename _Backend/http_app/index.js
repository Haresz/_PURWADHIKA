const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 2600;

const server = http.createServer((req, res) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Method": "GET, POST, PATCH, PUT, DELETE",
  };

  if (req.url.includes("/products")) {
    var products = fs.readFileSync("./data/product.json");
    if (req.method == "GET") {
      res.writeHead(200, headers);
      res.end(products);
    } else if (req.method == "POST") {
      let body = [];
      products = JSON.parse(products);
      req
        .on("data", (chunk) => {
          body.push(chunk);
        })
        .on("end", () => {
          body = Buffer.concat(body).toString();
          products.push(JSON.parse(body));
          fs.writeFileSync("./data/product.json", JSON.stringify(products));
          res.writeHead(201, headers);
          res.end(fs.readFileSync("./data/product.json"));
        });
    } else if (req.method == "PUT") {
      req.query = url.parse(req.url, true).query;
      req.query.id = parseInt(req.query.id);
      let body = [];
      products = JSON.parse(products);
      req
        .on("data", (chunk) => {
          body.push(chunk);
        })
        .on("end", () => {
          body = JSON.parse(Buffer.concat(body).toString());
          let idx = products.findIndex((item) => item.id === req.query.id);
          products[idx] = body;
          fs.writeFileSync("./data/product.json", JSON.stringify(products));
          res.writeHead(200, headers);
          res.end(fs.readFileSync("./data/product.json"));
        });
    } else if (req.method == "PATCH") {
      req.query = url.parse(req.url, true).query;
      req.query.id = parseInt(req.query.id);
      let body = [];
      products = JSON.parse(products);
      req
        .on("data", (chunk) => {
          body.push(chunk);
        })
        .on("end", () => {
          body = JSON.parse(Buffer.concat(body).toString());
          let index = products.findIndex((item) => item.id === req.query.id);
          for (let prop in products[index]) {
            for (let bodyProp in body) {
              if (prop == bodyProp) {
                products[index][prop] = body[bodyProp];
              }
            }
          }
          fs.writeFileSync("./data/product.json", JSON.stringify(products));
          res.writeHead(200, headers);
          res.end(fs.readFileSync("./data/product.json"));
        });
    } else if (req.method == "DELETE") {
      req.query = url.parse(req.url, true).query;
      req.query.id = parseInt(req.query.id);
      products = JSON.parse(products);
      let index = products.findIndex((item) => item.id === req.query.id);
      products.splice(index, 1);
      fs.writeFileSync("./data/product.json", JSON.stringify(products));
      res.writeHead(200, headers);
      res.end(fs.readFileSync("./data/product.json"));
    }
  }
});

server.listen(port, () => console.log("sever runing :", port));
