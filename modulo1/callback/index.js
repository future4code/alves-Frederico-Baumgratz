// Exercícios de interpretação de código

// 1. Leia o código abaixo

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ];

// const novoArrayA = usuarios.map((item, index, array) => {
//   console.log(item, index, array);
// });

//  a) O que vai ser impresso no console?
//  Vai imprimir tudo. o objeto inteiro, o nome e o apelido.

// 2. Leia o código abaixo

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ];

// const novoArrayB = usuarios.map((item, index, array) => {
//   return item.nome;
// });

// console.log(novoArrayB);

// a) O que vai ser impresso no console?
// Agora só os nomes serão impressos.

// 3. Leia o código abaixo

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
];

const novoArrayC = usuarios.filter((item, index, array) => {
  return item.apelido !== "Chijo";
});

console.log(novoArrayC);

//  a) O que vai ser impresso no console?
//  Agora serão impressos os apelidos com exceção do apelido Chijo
//  Errei. Imprimiu tudo que não é Chijo. Não entendi pq imprimiu o nome.

// Exercícios de escrita de código

// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

// a) Crie um novo array que contenha apenas o nome dos doguinhos

const petName = pets.map((a) => {
  return a.nome;
});

console.log(petName);

// b) Crie um novo array apenas com os cachorros salsicha

const petSalsicha = pets.filter((a) => {
  return a.raca == "Salsicha";
});

console.log(petSalsicha);

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const petPoodle = pets
  .filter((a) => {
    return a.raca == "Poodle";
  })
  .map((a) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${a.nome}!`;
  });

console.log(petPoodle);

// 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

// a) Crie um novo array que contenha apenas o nome de cada item

let productName = produtos.map((item) => {
  return item.nome;
});
console.log(productName);

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
const discount = produtos.map((a) => {
  return {
    nome: a.nome,
    preco: a.preco * 0.95,
  };
});
console.log(discount);

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const drinks = produtos.filter((a) => {
  return {
    nome: a.categoria == "bebidas",
  };
});
console.log(drinks);

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const ype = produtos.filter((a) => {
  return {
    nome: a.nome == "Ypê",
  };
});
console.log(ype);

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

// Desafios:

// 1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];

// a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
