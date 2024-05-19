const prompt = require("prompt-sync")();

const calculateIdealWeight = (height, gender) => {
  return gender === "M" ? 62.1 * height - 44.7 : 72.7 * height - 58;
}

let height = parseFloat(prompt("Digite a sua altura: "));
let gender = prompt("Digite o sexo(M/F): ");

while (!["M", "F"].includes(gender.toUpperCase())) {
  gender = prompt("Opção inválida, tente novamente(M/F): ");
}

height = height < 3 ? height : height/100; 

console.log(`O seu peso ideal é ${calculateIdealWeight(height, gender).toFixed(1)}kg`);