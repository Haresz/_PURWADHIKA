interface IAddress {
  address: string;
}

interface IPerson {
  name: string;
  age: number;
  address: IAddress;
}

interface ICalculus {
  add: (x: number, y: number) => {};
  multiply: (x: number, y: number) => {};
}

let myname: string = "Dimas";
myname = "12";
console.log(myname);

let myage: number = 90;
let hobbies: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
let obj: IPerson = {
  name: "ali",
  age: 90,
  address: { address: "walu sari" },
};

let people: IPerson[] = [
  { name: "bahar", age: 23, address: { address: "walu sari" } },
  { name: "bandi", age: 299, address: { address: "kayun" } },
];

console.log(obj);
console.table(people);

function add(x: number, y: number) {
  return x + y;
}

let result = add(45, 89);
console.log(result);

function multiply(x: number, y: number) {
  return x * y;
}

console.log(multiply(6, 0));
