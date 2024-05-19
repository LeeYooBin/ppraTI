const prompt = require("prompt-sync")();

const result = [];
for (let i = 0; i < 5; i++) {
  result.push(parseInt(prompt(`Digite o ${i + 1}° número do resultado oficial da Loto: `)));
}

const bets = [];
for (let i = 0; i < 50; i++) {
  const bet = [];
  for (let j = 0; j < 5; j++) {
    bet.push(parseInt(prompt(`Digite o ${j + 1}° número da aposta ${i + 1}: `)));
  }
  bets.push(bet);
}

console.log(`Resultados: ${bets}`);

bets.forEach((bet, index) => {
  const isWinner = bet.every((num, i) => num === result[i]);
  if (isWinner) console.log(`Aposta ${index + 1} Ganhador`);
});
