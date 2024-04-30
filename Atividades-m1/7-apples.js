const prompt = require("prompt-sync")();

const numApples = parseInt(prompt("Número de maçãs: "));

console.log(`Total: $${numApples >= 12 ? (numApples * 0.25).toFixed(2) : (numApples * 0.3).toFixed(2)}`);