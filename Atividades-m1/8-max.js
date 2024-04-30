const prompt = require("prompt-sync")();

const n1 = parseInt(prompt("N1: "));
const n2 = parseInt(prompt("N2: "));

console.log(n1 > n2 ? `${n2}, ${n1}` : `${n1}, ${n2}`);