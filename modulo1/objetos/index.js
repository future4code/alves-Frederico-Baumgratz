// Exercícios de interpretação de código
// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado.

// 1. Leia o código abaixo
// const filme = {
// 	nome: "Auto da Compadecida",
// 	ano: 2000,
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
// 		"Virginia Cavendish"
// 		],
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"},
// 		{canal: "Canal Brasil", horario: "19h"},
// 		{canal: "Globo", horario: "14h"}
// 		]
// }
// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?
// Matheus Nachtergaele
// Virginia Cavendish
// Globo 14h

// 2. Leia o código abaixo
// const cachorro = {
// 	nome: "Juca",
// 	idade: 3,
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)
// a) O que vai ser impresso no console?
//    Juca 3 SRD
//    Juba 3 SRD
//    Jubo 3 SRD
// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//    Essa sintaxe permite que eu acesse o conteúdo do objeto.

// 3. Leia o código abaixo
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio",
//   idade: 23,
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))
// a) O que vai ser impresso no console?
//    false
//    undefined
// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//    Imprimiu false porque no primeiro console.log a função acessou o objeto e imprimiu a propriedade pedida. No segundo console.log imprimiu undefined porque dentro do objeto não existe a propriedade pedida.

// Exercícios de escrita de código

// 1. Resolva os passos a seguir:
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo a seguir: "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

const pessoa = {
  nome: "Amanda",
  apelidos: ["Amandinha", "Mandinha", "Mandy"],
};

function helloMandy(a, b) {
  return a[b];
}

console.log(
  `Eu sou ${helloMandy(pessoa, "nome")}, mas pode me chamar de: ${helloMandy(
    pessoa,
    "apelidos"
  )}`
);

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

const nick = { ...helloMandy, apelidos: "ASd, aosdk, asodoaso" };
console.log(
  `Eu sou ${helloMandy(pessoa, "nome")}, mas pode me chamar de: ${nick}`
);

console.log(nick);
// 2. Resolva os passos a seguir:

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

const user1 = {
  nome: "Osvaldo",
  idade: "45",
  profissao: "jogador",
};
const user2 = {
  nome: "Hassan",
  idade: "38",
  profissao: "professor",
};

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// 1. O valor de `nome`
function getUser(a, b) {
  console.log(a[b]);
}

getUser(user1, "nome");
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`
// - Exemplo

//     ```jsx
//     const pessoa = {
//        nome: "Bruno",
//       idade: 23,
//        profissao: "Instrutor"
//     }

//     minhaFuncao(pessoa)

//     // Retorno: ["Bruno", 5, 23, "Instrutor", 9]
//     ```

// 3. Resolva os passos a seguir:

//     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

//     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

//     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados.

//     d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**
