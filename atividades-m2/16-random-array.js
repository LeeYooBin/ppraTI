const array = [];

for (let i = 0; i < 20; i++) {
  array.push(Math.floor(Math.random() * (99 - 0 + 1)) + 0);
}

console.log(array);
console.log(array.sort((a, b) => a - b));