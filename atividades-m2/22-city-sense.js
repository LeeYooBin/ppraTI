const prompt = require("prompt-sync")();

const data = [];

while (true) {
  data.push({
    salary: parseFloat(prompt("Digite o salário: ")),
    childrenNumber: parseInt(prompt("Digite a quantidade de filhos: "))
  });

  const  option = prompt("Digite 0 para parar de adicionar dados: ");

  if (option.trim() === "0") break;
}

console.log(`
Média salarial: R$ ${(data.reduce((accumulator, data) => accumulator + data.salary, 0) / data.length).toFixed(2)}
Média de filhos: ${(data.reduce((accumulator, data) => accumulator + data.childrenNumber, 0) / data.length).toFixed(1)} por pessoa.
Maior salário: R$ ${(Math.max(...data.map(data => data.salary))).toFixed(2)}
Percentual de pessoas com salário até R$ 350.00: ${(data.filter(data => data.salary <= 350).length / data.length * 100).toFixed(1)}%
`);