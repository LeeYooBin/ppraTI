const prompt = require("prompt-sync")();

const times = [];

for (let i = 0; i < 5; i++) {
  let time;
  do {
    time = prompt("Digite um horário no formato (HH:MM:SS): ");
  } while (!/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(horario));
  times.push(time);
}

times.forEach(time => console.log(time));
