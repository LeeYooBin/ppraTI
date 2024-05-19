const prompt = require("prompt-sync")();

const answerSheet = [];
for (let i = 0; i < 13; i++) {
  answerSheet.push(parseInt(prompt(`Digite o ${i + 1}° elemento do gabarito: `)));
}

const bettors = [];
for (let i = 0; i < 100; i++) {
  const cardNumber = parseInt(prompt(`Digite o número do cartão do ${i + 1}° apostador: `));
  const responses = [];
  for (let j = 0; j < 13; j++) {
    responses.push(parseInt(prompt(`Digite a ${j + 1}° resposta do apostador ${cardNumber}: `)));
  }
  bettors.push({ card, responses });
}

bettors.forEach(bettor => {
  const { cardNumber, responses } = bettor;
  let correctAnswers = 0;
  for (let i = 0; i < answerSheet.length; i++) {
    if (responses[i] === answerSheet[i]) correctAnswers += 1;
  }
  console.log(`Apostador ${cardNumber}: ${correctAnswers} acertos`);
  if (correctAnswers === 13) console.log("Parabéns, tu foi o GANHADOR");
});
