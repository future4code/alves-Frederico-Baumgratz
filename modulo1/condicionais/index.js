// Exercícios de interpretação de código

// 1. Leia o código abaixo:

// const respostaDoUsuario = prompt("Digite o número que você quer testar");
// const numero = Number(respostaDoUsuario);

// if (numero % 2 === 0) {
//   console.log("Passou no teste.");
// } else {
//   console.log("Não passou no teste.");
// }

// a) Explique o que o código faz. Qual o teste que ele realiza?
//    O código está testando se o número que o usuário inserir é divisível por 2.

// b) Para que tipos de números ele imprime no console "Passou no teste"?
//    Para números que são divisíveis por 2 e o resto é 0.

// c) Para que tipos de números a mensagem é "Não passou no teste"?
//    Para números em que o resto é diferente de 0.

// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta");
// let preco;
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5;
//     break;
//   case "Maçã":
//     preco = 2.25;
//     break;
//   case "Uva":
//     preco = 0.3;
//     break;
//   case "Pêra":
//     preco = 5.5;
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5;
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco);

// a) Para que serve o código acima?
//    Para automatizar algumas tarefas de um supermercado.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//    O preço da fruta Maçã é R$2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")
//    Se você retirar o break, ele mostrará o preço do default. No caso, 5 reais.

// 3. Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."));

// if (numero > 0) {
//   console.log("Esse número passou no teste");
//   let mensagem = "Essa mensagem é secreta!!!";
// }

// console.log(mensagem);

// a) O que a primeira linha está fazendo?
//    Declarando uma variável que recebe um numeral do usuário.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//    Haverá duas mensagens. A primeira dirá que o número passou no teste. A segunda vai ser um erro porque "mensagem" só está definida dentro do escopo da função. Portanto, o segundo console.log imprime um erro.
// No caso de ser o número -10, o primeiro console.log não irá imprimir porque ele só identifica números inteiros. Aparecerá apenas o erro do segundo console.log.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//    Opa... já expliquei na questão anterior.

// - **Exercícios de escrita de código**

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// let userAge = Number(prompt("Qual é sua idade?"));

// if (userAge >= 18) {
//   console.log("Você está apto para dirigir");
// } else {
//   console.log("Você não está apto para dirigir");
// }

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// let turno = prompt(
//   `Em qual turno você estuda? Digite 'M' para (matutino), 'V' para (Vespertino) ou 'N' para (Noturno)`
// );

// if (turno == "M") {
//   console.log("Bom dia!");
// } else if (turno == "V") {
//   console.log("Boa tarde!");
// } else if (turno == "N") {
//   console.log("Boa noite!");
// }

// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// switch (turno) {
//   case "M":
//     console.log("Bom dia!");
//     break;
//   case "V":
//     console.log("Boa tarde!");
//     break;
//   case "N":
//     console.log("Boa noite!");
// }

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso estiver abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// const movieType = prompt("Qual o gênero do filme que vocês vão assistir?");
// const moviePrice = prompt(
//   "Qual o preço do ingresso do filme que vocês vão assistir?"
// );

// if (movieType != "fantasia" || moviePrice > "15") {
//   console.log("Escolha outro filme :(");
// } else {
//   console.log("Bom filme!");
// }

// Desafios

// 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem `"Bom filme!"`, pergunte ao usuário, pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens `"Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`, trocando [LANCHINHO] pelo que o usuário colocou no input.

// if (movieType != "fantasia" || moviePrice > "15") {
//   console.log("Escolha outro filme :(");
// } else {
//   let lanche = prompt("Qual lanchinho você vai comprar?");
//   console.log(`Bom filme! e aproveite seu ${lanche}`);
// }

// 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
//     - Nome completo;
//     - Tipo de jogo: IN indica internacional; e DO indica doméstico;
//     - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
//     - Categoria: pode ser as opções 1, 2, 3 ou 4;
//     - Quantidade de ingressos
// O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

// Nome completo
let userName = prompt("Qual o seu nome completo?");

// Tipo de jogo
let gameTypeInput = prompt(
  "Digite 'IN' para jogos internacionais ou 'DO' para jogos domésticos"
).toUpperCase();

let gameTypeOutput;
if (gameTypeInput == "IN") {
  gameTypeOutput = "Internacional";
} else {
  gameTypeOutput = "Nacional";
}

// Etapa do jogo
let gameBracketInput = prompt(
  "Digite 'SF' para semi-final, 'DT' para decisão do terceiro lugar ou 'FI' para final"
).toUpperCase();

let gameBracketOutput;
switch (gameBracketInput) {
  case "SF":
    gameBracketOutput = "Semi-Final";
    break;
  case "DT":
    gameBracketOutput = "Decisão do 3º lugar";
    break;
  case "FI":
    gameBracketOutput = "Final";
    break;
}

// Categoria
let ticketType = prompt("Qual a categoria do seu ingresso? (1, 2, 3 ou 4)?");

// Quantidade de ingressos
let ticketAmount = Number(prompt("Quantos ingressos você deseja?"));

// Não consegui fazer funcionar com switch, mas com if vai!
// OBS: Eu não entendo por que o código não retorna um número na compra internacional. Até o Typeoff do ingressoUs é number. Mas na hora de fazer a multiplicação e entregar o valor do ingresso/o valor total, eles me volta NaN.
// Entendi! Ele estava retornando NaN porque o ticketPriceUs estava declarado fora do if. Ou seja, o ticketPriceBr ainda não tinha valor, então não tinha como fazer a multiplicação.
// OBS2: Inclui a variável ticketPriceUsRounded para o valor sair melhor, porque estava saindo com mtos decimais.

let ticketPriceBr;

if (gameBracketInput == "SF") {
  if (ticketType == "1") {
    ticketPriceBr = 1320;
    let ticketPriceUs = ticketPriceBr * 4.1;
    let ticketPriceUsRounded = (Math.round(ticketPriceUs * 100) / 100).toFixed(
      2
    );
    let totalPrice;
    if (gameTypeInput == "IN") {
      totalPrice = ticketPriceUs * ticketAmount;
      let totalPriceRounded = (Math.round(totalPrice * 100) / 100).toFixed(2);
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceUsRounded}\nValor total: R$ ${totalPriceRounded}`
      );
    } else {
      totalPrice = ticketPriceBr * ticketAmount;
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceBr}\nValor total: R$ ${totalPrice}`
      );
    }
  }
  if (ticketType == "2") {
    ticketPriceBr = 880;
    let ticketPriceUs = ticketPriceBr * 4.1;
    let ticketPriceUsRounded = (Math.round(ticketPriceUs * 100) / 100).toFixed(
      2
    );
    let totalPrice;
    if (gameTypeInput == "IN") {
      totalPrice = ticketPriceUs * ticketAmount;
      let totalPriceRounded = (Math.round(totalPrice * 100) / 100).toFixed(2);
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceUsRounded}\nValor total: R$ ${totalPriceRounded}`
      );
    } else {
      totalPrice = ticketPriceBr * ticketAmount;
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceBr}\nValor total: R$ ${totalPrice}`
      );
    }
  }
  if (ticketType == "3") {
    ticketPriceBr = 550;
    let ticketPriceUs = ticketPriceBr * 4.1;
    let ticketPriceUsRounded = (Math.round(ticketPriceUs * 100) / 100).toFixed(
      2
    );
    let totalPrice;
    if (gameTypeInput == "IN") {
      totalPrice = ticketPriceUs * ticketAmount;
      let totalPriceRounded = (Math.round(totalPrice * 100) / 100).toFixed(2);
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceUsRounded}\nValor total: R$ ${totalPriceRounded}`
      );
    } else {
      totalPrice = ticketPriceBr * ticketAmount;
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceBr}\nValor total: R$ ${totalPrice}`
      );
    }
  }
  if (ticketType == "4") {
    ticketPriceBr = 220;
    let ticketPriceUs = ticketPriceBr * 4.1;
    let ticketPriceUsRounded = (Math.round(ticketPriceUs * 100) / 100).toFixed(
      2
    );
    let totalPrice;
    if (gameTypeInput == "IN") {
      totalPrice = ticketPriceUs * ticketAmount;
      let totalPriceRounded = (Math.round(totalPrice * 100) / 100).toFixed(2);
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceUsRounded}\nValor total: R$ ${totalPriceRounded}`
      );
    } else {
      totalPrice = ticketPriceBr * ticketAmount;
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceBr}\nValor total: R$ ${totalPrice}`
      );
    }
  }
  if (
    ticketType != "1" &&
    ticketType != "2" &&
    ticketType != "3" &&
    ticketType != "4"
  ) {
    console.log("Você informou uma categoria inexistente");
  }
}

if (gameBracketInput == "DT") {
  if (ticketType == "1") {
    ticketPriceBr = 660;
    let ticketPriceUs = ticketPriceBr * 4.1;
    let ticketPriceUsRounded = (Math.round(ticketPriceUs * 100) / 100).toFixed(
      2
    );
    let totalPrice;
    if (gameTypeInput == "IN") {
      totalPrice = ticketPriceUs * ticketAmount;
      let totalPriceRounded = (Math.round(totalPrice * 100) / 100).toFixed(2);
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceUsRounded}\nValor total: R$ ${totalPriceRounded}`
      );
    } else {
      totalPrice = ticketPriceBr * ticketAmount;
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceBr}\nValor total: R$ ${totalPrice}`
      );
    }
  }
  if (ticketType == "2") {
    ticketPriceBr = 440;
    let ticketPriceUs = ticketPriceBr * 4.1;
    let ticketPriceUsRounded = (Math.round(ticketPriceUs * 100) / 100).toFixed(
      2
    );
    let totalPrice;
    if (gameTypeInput == "IN") {
      totalPrice = ticketPriceUs * ticketAmount;
      let totalPriceRounded = (Math.round(totalPrice * 100) / 100).toFixed(2);
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceUsRounded}\nValor total: R$ ${totalPriceRounded}`
      );
    } else {
      totalPrice = ticketPriceBr * ticketAmount;
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceBr}\nValor total: R$ ${totalPrice}`
      );
    }
  }
  if (ticketType == "3") {
    ticketPriceBr = 330;
    let ticketPriceUs = ticketPriceBr * 4.1;
    let ticketPriceUsRounded = (Math.round(ticketPriceUs * 100) / 100).toFixed(
      2
    );
    let totalPrice;
    if (gameTypeInput == "IN") {
      totalPrice = ticketPriceUs * ticketAmount;
      let totalPriceRounded = (Math.round(totalPrice * 100) / 100).toFixed(2);
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceUsRounded}\nValor total: R$ ${totalPriceRounded}`
      );
    } else {
      totalPrice = ticketPriceBr * ticketAmount;
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceBr}\nValor total: R$ ${totalPrice}`
      );
    }
  }
  if (ticketType == "4") {
    ticketPriceBr = 170;
    let ticketPriceUs = ticketPriceBr * 4.1;
    let ticketPriceUsRounded = (Math.round(ticketPriceUs * 100) / 100).toFixed(
      2
    );
    let totalPrice;
    if (gameTypeInput == "IN") {
      totalPrice = ticketPriceUs * ticketAmount;
      let totalPriceRounded = (Math.round(totalPrice * 100) / 100).toFixed(2);
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceUsRounded}\nValor total: R$ ${totalPriceRounded}`
      );
    } else {
      totalPrice = ticketPriceBr * ticketAmount;
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceBr}\nValor total: R$ ${totalPrice}`
      );
    }
  }
  if (
    ticketType != "1" &&
    ticketType != "2" &&
    ticketType != "3" &&
    ticketType != "4"
  ) {
    console.log("Você informou uma categoria inexistente");
  }
}

if (gameBracketInput == "FI") {
  if (ticketType == "1") {
    ticketPriceBr = 1980;
    let ticketPriceUs = ticketPriceBr * 4.1;
    let ticketPriceUsRounded = (Math.round(ticketPriceUs * 100) / 100).toFixed(
      2
    );
    let totalPrice;
    if (gameTypeInput == "IN") {
      totalPrice = ticketPriceUs * ticketAmount;
      let totalPriceRounded = (Math.round(totalPrice * 100) / 100).toFixed(2);
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceUsRounded}\nValor total: R$ ${totalPriceRounded}`
      );
    } else {
      totalPrice = ticketPriceBr * ticketAmount;
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceBr}\nValor total: R$ ${totalPrice}`
      );
    }
  }
  if (ticketType == "2") {
    ticketPriceBr = 1320;
    let ticketPriceUs = ticketPriceBr * 4.1;
    let ticketPriceUsRounded = (Math.round(ticketPriceUs * 100) / 100).toFixed(
      2
    );
    let totalPrice;
    if (gameTypeInput == "IN") {
      totalPrice = ticketPriceUs * ticketAmount;
      let totalPriceRounded = (Math.round(totalPrice * 100) / 100).toFixed(2);
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceUsRounded}\nValor total: R$ ${totalPriceRounded}`
      );
    } else {
      totalPrice = ticketPriceBr * ticketAmount;
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceBr}\nValor total: R$ ${totalPrice}`
      );
    }
  }
  if (ticketType == "3") {
    ticketPriceBr = 880;
    let ticketPriceUs = ticketPriceBr * 4.1;
    let ticketPriceUsRounded = (Math.round(ticketPriceUs * 100) / 100).toFixed(
      2
    );
    let totalPrice;
    if (gameTypeInput == "IN") {
      totalPrice = ticketPriceUs * ticketAmount;
      let totalPriceRounded = (Math.round(totalPrice * 100) / 100).toFixed(2);
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceUsRounded}\nValor total: R$ ${totalPriceRounded}`
      );
    } else {
      totalPrice = ticketPriceBr * ticketAmount;
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceBr}\nValor total: R$ ${totalPrice}`
      );
    }
  }
  if (ticketType == "4") {
    ticketPriceBr = 330;
    let ticketPriceUs = ticketPriceBr * 4.1;
    let ticketPriceUsRounded = (Math.round(ticketPriceUs * 100) / 100).toFixed(
      2
    );
    let totalPrice;
    if (gameTypeInput == "IN") {
      totalPrice = ticketPriceUs * ticketAmount;
      let totalPriceRounded = (Math.round(totalPrice * 100) / 100).toFixed(2);
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceUsRounded}\nValor total: R$ ${totalPriceRounded}`
      );
    } else {
      totalPrice = ticketPriceBr * ticketAmount;
      console.log(
        `--- Dados da compra ---\nNome do cliente: ${userName}\nTipo do jogo: ${gameTypeOutput}\nEtapa do jogo: ${gameBracketOutput}\nCategoria: ${ticketType}\nQuantidade de Ingressos: ${ticketAmount} ingressos\n--- Valores ---\nValor do ingresso: R$ ${ticketPriceBr}\nValor total: R$ ${totalPrice}`
      );
    }
  }
  if (
    ticketType != "1" &&
    ticketType != "2" &&
    ticketType != "3" &&
    ticketType != "4"
  ) {
    console.log("Você informou uma categoria inexistente");
  }
}
