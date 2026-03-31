/*

- Exercicio 1
Crie variáveis */

let nome = "Alexandre";
const idade = 52;
let profissao = "Desenvolvedor";
let cidade = "São Paulo";
console.log(`Meu nome é ${nome}, tenho ${idade} anos, trabalho como ${profissao} e moro em ${cidade}.`)

/*--------------------------------------------------------------------------------------

- Exercício 2  — Produto


Crie variáveis:
produto
preco
quantidade 
Mostre:

Comprei ___ unidades de ___ por R$___ cada.
*/

let produto = "Celular";
const preco = 2000;
const quantidade = 1; 
console.log(`Comprei ${quantidade} unidade do ${produto} no valor de R$ ${preco}`)

/*--------------------------------------------------------------------------------------

- Exercício 3 — Calculando valores

Crie:
valor1 = 10
valor2 = 20

Mostre no console:
Soma
Subtração
Multiplicação
Divisão */

let valor1 = 10;
let valor2 = 20;

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);
console.log(valor1 / valor2);

/*--------------------------------------------------------------------------------------

- Exercício 4 — Tipos Crie 5 variáveis com tipos diferentes e mostre:

valor
tipo
Exemplo esperado:
Olá - string
10 - number
true - boolean */

let saudacao = "Olá Mundo!!"; 
console.log(saudacao);
console.log(typeof saudacao); // String

let idade1 = 52; 
console.log(idade);
console.log(typeof idade); // number
let aberto = true;
console.log(aberto);
console.log(typeof aberto); // boolean

/*-----------------------------------------------------------------------------------------

// Exercício 5 — Conversões
Crie:
let numero = "100"
Converta para:
number
string novamente */

let numero2 = "100";
console.log(Number(numero2));  // String para number

let numero = 100;
console.log(typeof String(numero)); // number para String


/*-------------------------------------------------------------------------------------------

// Desafio - Criar um  - mini cadastro:

Variáveis:
nome
idade
altura
peso
cidade
profissao

Mostrar:
Cadastro do usuário
Nome:
Idade:
Altura:
Peso:
Cidade:
Profissão: */


let name = "Alexandre";
const idade2 = 52;
const altura = 1.75;
const peso = 100;
let cidade2 = "São Paulo";
let profissao2 = "Desenvolvedor";

console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade2}`);
console.log(`Altura: ${altura}`);
console.log(`Peso: ${peso}`);
console.log(`Cidade: ${cidade2}`);
console.log(`Profissão: ${profissao2}`);