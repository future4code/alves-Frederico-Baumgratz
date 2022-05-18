// Exercícios de interpretação de código

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0;
for (let i = 0; i < 5; i++) {
  valor += i;
}
console.log(valor);

// O código está acrescentando +1 até que o valor seja 5. Será impresso:
// 0
// 1
// 2
// 3
// 4
// Errei! O código está somando até que o valor seja 5. Então é 1+2+3+4. Será impresso: 10.

// 2. Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
for (let numero of lista) {
  if (numero > 18) {
    console.log(numero);
  }
}

// a) O que vai ser impresso no console?
// Os números maiores que 18 serão impressos.

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// Eu não sei como faria com for of.... mas poderia fazer só com o for.
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "));
let quantidadeAtual = 0;
while (quantidadeAtual < quantidadeTotal) {
  let linha = "";
  for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
    linha += "*";
  }
  console.log(linha);
  quantidadeAtual++;
}
// *
// **
// ***
// ****

// Exercícios de escrita de código

// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
let petNumber = Number(prompt("Quantos bichos vc tem?"));

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
// c) Por fim, imprima o array com os nomes dos bichinhos no console

if (petNumber == 0) {
  console.log("Que pena! Você pode adotar um pet");
} else {
  let petArray = [];
  for (let i = 0; i < petNumber; i++) {
    let petNames = prompt(`Qual é o nome do seu ${i + 1}º pet?`);
    petArray[i] = petNames;
  }
  console.log(petArray);
}

// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

let arrayOriginal = ["1", "2"];

// a) Escreva um programa que **imprime** cada um dos valores do array original.

for (let x = 0; x < arrayOriginal.length; x++) {
  console.log(arrayOriginal[x]);
  console.log(arrayOriginal[x] / 10);
}

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

for (let numeroPar of arrayOriginal) {
  if (numeroPar > 18) {
    console.log(numeroPar);
  }
}
// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
