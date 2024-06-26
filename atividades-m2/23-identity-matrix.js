const { printMatrix } = require("./utils/matrix");

const generateIdentityMatrix = (n) => {
  const matrix = [];

  for (let i = 0; i < n; i++) {
    const row = [];

    for (let j = 0; j < n; j++) row.push(i === j ? 1 : 0);
    
    matrix.push(row);
  }

  return matrix;
}

console.log(printMatrix(generateIdentityMatrix(7)));
