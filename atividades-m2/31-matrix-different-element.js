const prompt = require("prompt-sync")();
const { readMatrix, printMatrix } = require("./utils/matrix");

const findAndRemoveA = (matrix, number) => {
  let count = 0;
  const newMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    const row = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === number) count += 1;
      else row.push(matrix[i][j]);
    }
    newMatrix.push(row);
  }

  return { count, newMatrix };
};

const number = parseInt(prompt("Digite um número inteiro: "));

// Ler matriz
const matrix = readMatrix(30, 30);

// Gerar matriz
// const matrix = generateMatrix(30, 30, 0, 9);

const { count, newMatrix } = findAndRemoveA(matrix, number);

console.log("Matriz original");
console.log(printMatrix(matrix));
console.log(`Número de ocorrências de ${number} na matriz: ${count}`);
console.log(`\nMatriz sem ${number}`);
console.log(printMatrix(newMatrix));
