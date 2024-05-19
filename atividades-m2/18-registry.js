const prompt = require("prompt-sync")();

const employeeRegister = {
  name: "",
  function: "",
  salary: 0
};

employeeRegister.name = prompt("Digite o nome do funcionário: ");
employeeRegister.function = prompt("Digite o cargo do funcionário: ");
employeeRegister.salary = parseFloat(prompt("Digite o salário do funcionário: "));

console.log(`
Registro de funcionário
Nome: ${employeeRegister.name}
Cargo: ${employeeRegister.function}
Salário: R$ ${employeeRegister.salary.toFixed(2)}
`);