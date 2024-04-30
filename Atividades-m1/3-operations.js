const prompt = require("prompt-sync")();

const nums = [];

nums.push(parseInt(prompt("N1: ")));
nums.push(parseInt(prompt("N2: ")));
nums.push(parseInt(prompt("N3: ")));
nums.push(parseInt(prompt("N4: ")));

console.log(nums[0] + 25);
console.log(nums[1] * 3);
console.log(nums[2] * 0.12);
console.log(nums.slice(0, 3).reduce((acc, value) => acc + value, 0));