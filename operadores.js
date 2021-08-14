// Exercicío 1
nomeDoFulano = 'José';
// nomeDoBeltrano = 'Mário'; // Imprime false
nomeDoBeltrano = 'José'; // Imprime true


mesmoNome = nomeDoFulano == nomeDoBeltrano;

console.log(mesmoNome);

// Exercício 2
// idade = 12; // imprime 'criança'
idade = 25; // imprime 'adulta'
maiorIdade = idade >= 18 ? 'adulta' : 'criança';

console.log('Esta pessoa é ' + maiorIdade + ' e tem ' + idade + ' anos.');

// Exercício 3
juros = 1.1;

valor = 59.90;

valorComJuros = valor * juros;
console.log(valorComJuros);

// Exercício 4
item1 = 30;
item2 = 23;
item3 = 59;
item4 = 42;
item5 = 39;

mediaAritmetica = (item1 + item2 + item3 + item4 + item5) / 5;
console.log(mediaAritmetica);

// Exercício 5
receitaLiquida = 5000;
custoProdutos = 2300;

lucroBruto = receitaLiquida - custoProdutos;
margemBruta = (lucroBruto / receitaLiquida) * 100;

console.log('A margem bruta é ' + margemBruta + '%.');

// Exercício 6
calca = 99.90;
salario = 2500;
doacao = 0.10;

saldo = 1000;
saldo -= calca;
saldo += salario;
saldo -= doacao;
saldo = saldo - (saldo * 0.25);
saldo /= 2;

console.log(saldo);










