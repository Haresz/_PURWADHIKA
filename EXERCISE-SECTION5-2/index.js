let things = [1, 2, 3, 4, 5, 6, 7, 8]
let reverse = [];

for (let index = things.length - 1; index >= 0; index--) {
    reverse.push(things[index])
}

console.log(reverse)