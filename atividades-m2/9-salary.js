const prompt = require("prompt-sync")();

let totalWomen = 0;
let totalMen = 0;

while (true) {
  const salary = parseFloat(prompt("Digite o salário do funcionário: "));
  let gender = prompt("Digite o sexo do funcionário (M para masculino, F para feminino): ").toUpperCase();

  while (gender !== "M" && gender !== "F") {
    gender = parseInt(prompt("Sexo inválido! Por favor, tente novamente(M/F): "));
  }

  if (gender === "M") totalMen += salary;
  else if (gender === "F") totalWomen += salary;
  
  const resposta = prompt("Deseja continuar inserindo dados de funcionários? (S/N): ").toUpperCase();
  if (resposta !== "S") break;
}

console.log(`Total de salário pago aos homens: ${totalMen}`);
console.log(`Total de salário pago às mulheres: ${totalWomen}`);


