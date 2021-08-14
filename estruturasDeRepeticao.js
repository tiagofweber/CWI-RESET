// Exercício 1
cidades = ['Porto Alegre', 'Curitiba', 'São Paulo', 'Belo Horizonte', 'Fortaleza'];
index = 0;

do {
  console.log(cidades[index]);
  index++;
} while (index < cidades.length);

// Exercício 2
valores = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55];

soma = 0;
i = 0;

while (i < valores.length) {
  soma += valores[i];
  i++;
}

media = soma / valores.length;
console.log(media);

// Exercício 3
nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", "Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", "Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", "Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", "Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", "Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"];

meuNome = 'Tiago';
nomeComum = false;

for (i = 0; i < nomesComuns.length; i++) {
  if (meuNome == nomesComuns[i]) {
    nomeComum = true;
    break;
  }
}

if (nomeComum) {
  console.log('É, nome comum :P');
} else {
  console.log('Diferentão, hein? XD');
}
