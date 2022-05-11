// Interpretação de código

// 1.
// a.  undefined
// b.  null
// c.  11
// d.  3
// e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f.  9

// 2.
// SUBI NUM ÔNIBUS EM MIRROCOS 27

// Exercícios de escrita de código
// 1.

let username = prompt("Qual é seu nome?");
let mail = prompt("Qual é seu e-mail?");

console.log(
  `O ${mail} foi cadastrado com sucesso. Seja bem vindo(a) ${username}`
);

// 2.

let food = ["macarrão", "lasanha", "quiabo", "costelinha", "feijoada"];

// a.
console.log(food);

// b.
console.log(
  `Estas são as minhas comidas preferidas: \n${food[0]},\n${food[1]},\n${food[2]},\n${food[3]},\n${food[4]}.`
);

// c.
let userFood = prompt("Qual é sua comida favorita?");

food[1] = userFood;
console.log(
  `Estas são as minhas comidas preferidas: \n${food[0]},\n${food[1]},\n${food[2]},\n${food[3]},\n${food[4]}.`
);

// 3.
// a.
let listaDeTarefas = [];

// b.
let userTask1 = prompt("O que você precisa fazer hoje pela manhã?");
let userTask2 = prompt("O que você precisa fazer hoje à tarde?");
let userTask3 = prompt("O que você precisa fazer hoje de noite?");

listaDeTarefas[0] = userTask1;
listaDeTarefas[1] = userTask2;
listaDeTarefas[2] = userTask3;

// c.
console.log(listaDeTarefas);

// d.
let done = prompt(
  `Digite o número da tarefa que você já realizou: 0. ${userTask1} 1. ${userTask2} 2. ${userTask3}`
);

// e.
listaDeTarefas.splice(done, 1);

// f
console.log(listaDeTarefas);
