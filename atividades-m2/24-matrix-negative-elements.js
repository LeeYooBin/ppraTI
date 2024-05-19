const { generateMatrix } = require("./utils/matrix");

const matrix = generateMatrix(6, 8, -100, 100);

const vector = matrix.map(row => row.filter(element => element < 0).length);

console.table(matrix);
vector.forEach((negativeElementsNum, index) => {
  console.log(`Linha ${index + 1}: ${negativeElementsNum} elementos negativos.`)
});
