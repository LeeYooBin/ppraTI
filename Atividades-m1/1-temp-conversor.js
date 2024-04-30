const prompt = require("prompt-sync")();

const celsiusTemp = parseFloat(prompt("Digite a temperatura em celsius: "));

const fahrenheitTemp = (celsiusTemp * 9/5) + 32;

console.log(`Temperatura em fahrenheit: ${fahrenheitTemp}°F`);
