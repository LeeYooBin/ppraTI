const prompt = require("prompt-sync")();

let even = [];
let odd = [];

for (let i = 0; i < 30; i++) {
  const value = parseInt(prompt("Digite um número inteiro: "));

  if (value % 2 === 0) {
    even.push(value);
    if (even.length === 5) {
      console.log(even);
      even = [];
    }
  }
  else {
    odd.push(value);
    if (odd.length === 5) {
      console.log(odd);
      odd = [];
    }
  }
}

if (even.length) console.log(even);
if (odd.length) console.log(odd);
