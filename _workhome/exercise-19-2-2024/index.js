const { FoodOrdering, Queue } = require("./class");

const order1 = new FoodOrdering("person 1", [
  "Coffee",
  "Pie",
  "Banana",
  "Coke",
]);
const order2 = new FoodOrdering("person 2", [
  "Milk Shake",
  "Sea Food",
  "Cake",
  "Banana",
]);
const order3 = new FoodOrdering("person 3", [
  "Hot Tea",
  "Rendang",
  "Pumpkin",
  "Mineral",
]);
order1.addQueue();
order2.addQueue();
order3.addQueue();

function orderHandler(Que) {
  return new Promise((resolve, reject) => {
    let timeOut = Math.round(Math.random() * 10000) + 1;
    setTimeout(() => {
      success = true;
      if (success) {
        resolve(`Pesanan sudah selesai dalam ${timeOut} => ${Que.name}`);
      } else {
        reject("error nih");
      }
    }, timeOut);
  });
}

const asynAwait = async () => {
  let i = 0;
  while (Queue[i]) {
    await orderHandler(Queue[i])
      .then((res) => {
        console.log("res => ", res);
      })
      .catch((err) => {
        console.log("err => ", err);
      })
      .finally(() => {
        console.log("final");
      });
    i++;
  }
};

asynAwait();
