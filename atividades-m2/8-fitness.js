const prompt = require("prompt-sync")();

const hours = parseInt(prompt("Digite a quantidade de horas de atividade física no mês: "));

const points = hours <= 10 ? hours * 2 :
               hours > 10 && hours <= 20 ? hours * 5 :
               hours * 10;

console.log(`Quantidade de pontos: ${points}; Dinheiro: R$ ${(points * 0.05).toFixed(2)}`);