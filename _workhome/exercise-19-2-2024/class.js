const Queue = [];

class FoodOrdering {
  constructor(name, pesanan) {
    this.name = name;
    this.order = pesanan;
  }

  addQueue() {
    let obj = {
      name: this.name,
      numQ: Queue.length + 1,
      order: [...this.order],
    };
    Queue.push(obj);
  }

  printQueue() {
    Queue.map((queue) => console.log(queue));
  }
}

module.exports = { FoodOrdering, Queue };
