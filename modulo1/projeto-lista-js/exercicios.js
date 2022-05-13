// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = prompt("Digite a altura do retângulo");
  let largura = prompt("Digite a altura do retângulo");

  console.log(altura * largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
  let thisYear = prompt("Em que ano estamos?");
  let birthYear = prompt("Em que ano você nasceu?");

  console.log(thisYear - birthYear);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual é seu nome?");
  let idade = prompt("Qual é sua idade?");
  let email = prompt("Qual é seu e-mail?");
  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let color1 = prompt("Qual é sua cor favorita?");
  let color2 = prompt("E a sua segunda cor favorita?");
  let color3 = prompt("E a terceira cor favorita?");

  let favoriteColors = [color1, color2, color3];

  console.log(favoriteColors);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  if (string1.length == string2.length) {
    return true;
  } else {
    return false;
  }
}

// Eu fiz com if / else mas eu poderia simplesmente ter feito return string1.length == string2.length
// function checaStringsMesmoTamanho(string1, string2) {
//   return string1.length == string2.length;
// }
// mais fácil né...

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() == string2.toUpperCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let thisYear = prompt("Em que ano estamos?");
  let birthYear = prompt("Em que ano você nasceu?");
  let rgYear = prompt("Em que ano sua carteira de identidade foi emitida?");
  let age = thisYear - birthYear;
  let renovar = thisYear - rgYear;

  if (age <= 50) {
    if (renovar >= 10) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  if (age > 50) {
    if (renovar >= 15) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let minAge = prompt("Responda sim ou não: Você tem mais de 18 anos?");
  let escolaridade = prompt(
    "Responda sim ou não: Você possui ensino médio completo?"
  );
  let disponibilidade = prompt(
    "Responda sim ou não: Você possui disponibilidade exclusiva durante os horários do curso?"
  );

  let answers = [minAge, escolaridade, disponibilidade];
  let positiveAnswers = ["sim", "sim", "sim"];

  console.log(answers == positiveAnswers);
}
