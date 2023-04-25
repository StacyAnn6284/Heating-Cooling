let actualTemp = prompt("What is the current temp?");
const desiredTemp = 70;

if (actualTemp < desiredTemp) {
  console.log("Run heat");
} else if (actualTemp > desiredTemp) {
  console.log("Run A/C");
} else {
  console.log("Standby");
}

let targetUnit = prompt("Is this K, C, or F?");
let tempCelsius;

switch (targetUnit) {
  case "C":
    tempCelsius = actualTemp;
    break;
  case "c":
    tempCelsius = actualTemp;
    break;
  case "F":
    tempCelsius = (actualTemp - 32) / 1.8;
    break;
  case "f":
    tempCelsius = (actualTemp - 32) / 1.8;
    break;
  case "K":
    tempCelsius = actualTemp - 273.15;
    break;
  case "k":
    tempCelsius = actualTemp - 273.15;
    break;
}

console.log(`It is ${Math.floor(tempCelsius)} degrees Celcius.`);
