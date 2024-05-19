const prompt = require("prompt-sync")();

const nameArray = [];
const ageArray = [];

for (let i = 1; i < 10; i++) {
  nameArray.push(prompt(`Digite o nome da ${i}° pessoa: `));
  ageArray.push(parseInt(prompt(`Digite a idade da ${i}° pessoa: `)));
}

for (let i = 0; i < ageArray.length; i++) {
  if (ageArray[i] < 18) {
    console.log(`${nameArray[i]} - ${ageArray[i]} anos de idade.`);
  }
}