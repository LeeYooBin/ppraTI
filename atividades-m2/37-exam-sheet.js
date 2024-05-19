const prompt = require("prompt-sync")();

const answerSheet = [];
for (let i = 0; i < 20; i++) {
  answerSheet.push(parseInt(prompt(`Digite a resposta da ${i + 1}° pergunta da prova: `)));
}

const students = [];
for (let i = 0; i < 100; i++) {
  const responses = [];
  for (let j = 0; j < 20; j++) {
    responses.push(parseInt(prompt(`Digite a ${j + 1}° resposta do aluno: `)));
  }
  students.push(responses);
}

for (let i = 0; i < students.length; i++) {
  let correctAnswers = 0;

  for (let j = 0; j < answerSheet.length; i++) {
    if (students[i] === answerSheet[i]) correctAnswers += 1;
  }

  if (correctAnswers >= 12) console.log("APROVADO.");
  else console.log("REPROVADO.");
}