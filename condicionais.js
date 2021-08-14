peso = 98;
altura = 1.75;

imc = peso / (altura * altura);

if (imc < 18.5) {
  classificacao = 'Magreza';
  grau = 0;
} else if (imc < 25) {
  classificacao = 'Normal';
  grau = 0;
} else if (imc < 30) {
  classificacao = 'Sobrepeso';
  grau = 1;
} else if (imc < 40) {
  classificacao = 'Obesidade';
  grau = 2;
} else {
  classificacao = 'Obesidade grave';
  grau = 3;
}

console.log('Seu IMC é', imc);
console.log('Sua classificação é:', classificacao);

if (grau > 0) {
  console.log('Cuidado! Você está acima do peso recomendado pela OMS.');
}

if (grau == 3) {
  console.log('É importante procurar um médico para avaliar sua saúde.')
}
