const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const fs = require("fs");
const csv = require("csv-parser");

const generateEmployeeTable = () => {
  const employees = [];

  for (let i = 1; i <= 80; i++) {
    employees.push({ 
      register: i < 10 ? `00${i}` : `0${i}`, 
      name: `Employee ${i}`, 
      salary: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000
    });
  }

  const csvWriter = createCsvWriter({
    path: "employees.csv",
    header: [
      { id: "register", title: "register" },
      { id: "name", title: "name" },
      { id: "salary", title: "salary" }
    ]
  });

  csvWriter.writeRecords(employees)
    .then(() => console.log("File generated"))
    .catch((e) => console.error(e));
}

generateEmployeeTable();

const employees = [];

fs.createReadStream("employees.csv")
  .pipe(csv())
  .on("data", (row) => {
    employees.push(row);
  })
  .on("end", () => {
    employees.forEach((employee) => {
      const salary = parseFloat(employee.salary);
      const inssDeduction = salary * 0.12;
      const netSalary = salary - inssDeduction;
    
      console.log(`
      Matrícula: ${employee.register}
      Nome: ${employee.name}
      Salário bruto: R$ ${salary.toFixed(2)}
      Dedução INSS: R$ ${inssDeduction.toFixed(2)}
      Salário líquido: R$ ${netSalary.toFixed(2)}
      `);
    });
  });