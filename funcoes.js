// Exercício 1
function imprimir(arg) {
  console.log(arg);
}

// Exercício 2
// Função para comparar dois nomes
function mesmoNome(nome1, nome2) {
  // verifica se nome1 é igual a nome2
  if (nome1 == nome2) {
    return true;
  } else {
    return false;
  }
}

// função para verificar a maioridade
function maiorDeIdade(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

// função para calcular juros
function calculaJuros(valorBoleto, juros) {
  valorComJuros = valorBoleto + (valorBoleto * juros);
  return valorComJuros;
}

// função para calcular media aritmética
function calcularmediaAritmetica(array) {
  soma = 0;
  for (i = 0; i < array.length; i++) {
    soma += array[i];
  }
  media = soma / array.length;
  return media;
}

// função para calcular a margem bruta
function calcularMargemBruta(receitaLiquidaVendas, custoProdutoVendidos) {
  lucroBruto = receitaLiquidaVendas - custoProdutoVendidos;
  margemBruta = (lucroBruto / receitaLiquidaVendas) * 100;
  return margemBruta;
}

cwi = 'CWI';
reset = 'Reset';
imprimir(mesmoNome(cwi, cwi));   // true
imprimir(mesmoNome(cwi, reset)); // false

imprimir('---');

imprimir(maiorDeIdade(30)); // true
imprimir(maiorDeIdade(18)); // true
imprimir(maiorDeIdade(5)); // false

imprimir('---');

imprimir(calculaJuros(100, 0.1));   // 110
imprimir(calculaJuros(984.5, 0.1)); // 1082.95

imprimir('---');

imprimir(calcularmediaAritmetica([1]));             // 1
imprimir(calcularmediaAritmetica([1, 4, 10]));      // 5
imprimir(calcularmediaAritmetica([1, 2, 3, 4, 5])); // 3

imprimir("---");

imprimir(calcularMargemBruta(1000000, 500000));      // 50
imprimir(calcularMargemBruta(528459.11, 632501.87)); // -19.68[...]
