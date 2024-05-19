const prompt = require("prompt-sync")();

const calculateSmokingTime = (yearsOfSmoking) => {
  const today = new Date();
  const startSmokingDate = new Date(today.getFullYear() - yearsOfSmoking, today.getMonth(), today.getDate());
  return Math.floor((today - startSmokingDate) / (1000 * 60 * 60 * 24));
}

const calculateWastedTime = (cigarettePerDay, yearsOfSmoking) => {
  return Math.floor(calculateSmokingTime(yearsOfSmoking) * cigarettePerDay * 10 / (60 * 24));
}

const cigarettePerDay = parseInt(prompt("Digite a quantidade de cigarros fumados por dia: "));
const yearsOfSmoking = parseInt(prompt("Digite a quantidade de anos Fumando: "));

const wastedTime = calculateWastedTime(cigarettePerDay, yearsOfSmoking);

console.log(`O tempo de vida perdido é de aproximadamente ${wastedTime} dias.`);
