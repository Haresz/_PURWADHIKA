// my module//
let { penjumlahan, pengurangan } = require("./myModules");

console.log(penjumlahan(10, 5));
console.log(pengurangan(20, 5));

// Javascripe module//

let timers = require("timers");
timers.setTimeout(
  (waktu = () => {
    console.log(`hello`);
  }),
  2000
);

let url = require("url");

let link = "http://link.id/data.html?tgl=12&bln=november";

let parcing = url.parse(link, true);

console.log("Host:", parcing.host);
console.log("Path:", parcing.pathname);
console.log("Query", parcing.search);

// npm module

let colors = require("colors");

console.log("hello".blue);
console.log("hello".rainbow);
console.log("hello".bgCyan.white);

let moment = require("moment");

let today = moment();

console.log(today.format("dddd, MMMM, YYYY"));

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
  } else if (req.method === "PUSH") {
  } else if (req.method === "PUT") {
  } else if (req.method === "PATCH") {
  } else if (req.method === "DELETE") {
  }
});
