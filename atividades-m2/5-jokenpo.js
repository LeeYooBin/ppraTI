const prompt = require("prompt-sync")();

const joKenPoMenu = () => {
  console.log(`
[1] - Pedra
[2] - Papel
[3] - Tesoura
  `);
}

const mainMenu = () => {
  console.log(`
[1] - Novo jogo
[2] - Ver placar geral
[3] - Sair
  `);
}

const gameOptionMenu = () => {
  console.log(`
[1] - MD3
[2] - MD5
[3] - Outro
[4] - Voltar
  `);
}

const computerPlay = () => {
  return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

const joKenPoResult = (userOption, computerOption, gameScoreBoard) => {
  let result = "";
  
  if (userOption === computerOption) result = "Empate";
  else if (
    (userOption === 1 && computerOption === 3) ||
    (userOption === 2 && computerOption === 1) ||
    (userOption === 3 && computerOption === 2)
  ) {
    gameScoreBoard.user += 1;
    result = `${username} venceu`;
  } else {
    gameScoreBoard.computer += 1;
    result = "Computador venceu";
  }

  const plays = ["pedra", "papel", "tesoura"];
  console.log(`\nVocê jogou ${plays[userOption - 1]} e o computador jogou ${plays[computerOption - 1]}. ${result}.\nPlacar: ${username} ${gameScoreBoard.user} x ${gameScoreBoard.computer} computador`);
}

const joKenPoGame = (rounds) => {
  const gameScoreBoard = {
    user: 0,
    computer: 0
  };

  const winScore = Math.ceil(rounds / 2);

  for (let i = 0; i < rounds; i++) {
    joKenPoMenu();
    let user = parseInt(prompt("Selecione uma opção: "));
    while (user > 3 || user < 1) {
      user = parseInt(prompt("Opção inválida! Tente novamente: "));
    }
    const computer = computerPlay();
    joKenPoResult(user, computer, gameScoreBoard);

    if (gameScoreBoard.user === winScore || gameScoreBoard.computer === winScore) break;
  }

  if (gameScoreBoard.user > gameScoreBoard.computer) scoreBoard.user += 1;
  else if (gameScoreBoard.user < gameScoreBoard.computer) scoreBoard.computer += 1;

  console.log(`\nPlacar geral: ${username} ${scoreBoard.user} x ${scoreBoard.computer} computador`);
}

const username = prompt("Digite o seu nome de usuário: ");

const scoreBoard = {
  user: 0,
  computer: 0
}

while (true) {
  mainMenu();
  const option = parseInt(prompt("Selecione uma opção: "));

  switch (option) {
    case 1:
      gameOptionMenu();
      const gameOption = parseInt(prompt("Selecione uma opção: "));
      
      if (gameOption < 1 || gameOption > 4) {
        console.log("Opção inválida!");
        continue;
      }

      if (gameOption === 4) continue;

      let rounds;

      if (gameOption === 1) rounds = 3;
      else if (gameOption === 2) rounds = 5;
      else {
        rounds = parseInt(prompt("Digite o número de rodadas que gostaria de jogar: "));
      }

      joKenPoGame(rounds);
      break;
    case 2:
      console.log(`\nPlacar geral: ${username} ${scoreBoard.user} x ${scoreBoard.computer} computador`);
      break;
    case 3:
      console.log(`\nPlacar final: ${username} ${scoreBoard.user} x ${scoreBoard.computer} computador`);
      process.exit();
    default:
    console.log("\nOpção inválida! Por favor, tente novamente.");
    continue;
  }
}