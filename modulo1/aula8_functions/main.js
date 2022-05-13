// Exercícios de interpretação de código

// 1.
// a. 10. 50.
// b. Eu pensei que retornaria da mesma forma. Mas testei e vi que não retorna nada.

// 2.
// a. Essa função pega o texto que o usuário digitou, transforma esse texto para letras minúsculas e verifica se existe a palavra "cenoura" nesse texto. Depois ele imprime a resposta no console te dando verdadeiro ou falso de acordo com a verificação.

// b.
// i. eu gosto de cenoura - true
// ii. cenoura é bom pra vista - true
// iii. cenouras crescem na terra - false

// Exercícios de escrita de código

// 1.
// a.

function aboutMe() {
  console.log(
    "Eu sou Frederico, tenho 45 anos, moro em Minas Gerais e sou estudante."
  );
}

// b.

let userName = prompt("Digite seu nome");
let userAge = prompt("Digite sua idade");
let userCity = prompt("Digite sua cidade");
let userOcupation = prompt("Digite sua profissão");

function aboutYou(parametro1, parametro2, parametro3, parametro4) {
  console.log(
    `Eu sou ${parametro1}, tenho ${parametro2} anos, moro em ${parametro3} e sou ${parametro4}.`
  );
}

aboutYou(userName, userAge, userCity, userOcupation);

// 2.
// a.

let num1 = prompt("Digite um número");
let num2 = prompt("Digite outro número");

function soma(a, b) {
  return a + b;
}

console.log(soma(num1, num2));

// b.

// c. Não soube fazer
// d. Não soube fazer

// d.

let userMsg = "Hello World!!";

function string(msg) {
  console.log(msg.length);
  console.log(msg.toUpperCase());
}

string(userMsg);

// 3.

// Eu tive uma dúvida na função de adição porque os números que eu coloco no lugar de "a" e "b" não são somados. Eles são concatenados. Por exemplo, se eu coloco 10 e 5, ao invés de retornar 15 ele me retorna 105. Por quê?
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let userNumber1 = prompt("Insira um número");
let userNumber2 = prompt("Insira outro número");

console.log(add(userNumber1, userNumber2));
console.log(sub(userNumber1, userNumber2));
console.log(multiply(userNumber1, userNumber2));
console.log(divide(userNumber1, userNumber2));
