function formulaIMC(peso, altura) {
  var imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
  return imc.toFixed(2);
}

function calculaIMC() {
  var resultadoIMC = document.getElementById('resultadoIMC');
  var nome = document.getElementById('inputNome').value;
  var peso = document.getElementById('inputPeso').value;
  var altura = document.getElementById('inputAltura').value;

  if (formulaIMC(peso, altura) < 18.5) {
    resultadoIMC.innerHTML =
      nome +
      ', seu IMC atual é ' +
      formulaIMC(peso, altura) +
      '. Esse valor esta abaixo do que é recomendado pela OMS';
  } else if (formulaIMC(peso, altura) > 30) {
    resultadoIMC.innerHTML =
      nome +
      ', seu IMC atual é ' +
      formulaIMC(peso, altura) +
      '. Esse esta acima do que é recomendado pela OMS';
  } else if (
    formulaIMC(peso, altura) >= 18.5 &&
    formulaIMC(peso, altura) <= 30
  ) {
    resultadoIMC.innerHTML =
      nome +
      ', seu IMC atual é ' +
      formulaIMC(peso, altura) +
      '. Esse valor esta dentro do que é recomendado pela OMS';
  }
}
