
    // Exercícios de Condicionais
    // Nível Básico

    // 1.	Verificar maioridade:
    // 1.	Peça ao usuário uma idade.
    // 2.	Use um if-else para verificar se ele é maior ou menor de idade

    let idade = Number(prompt("Digite sua idade:"));
    if(idade >= 18) {
        prompt("Voçe é maior de idade.")
    } else {
        prompt("Vc é menor de idade.")
    } 

    // ------------------------------------------------------------------------------------

	// Verificar se um número é positivo ou negativo:
	// Peça ao usuário para inserir um número.
	// Use um if-else para verificar se o número é positivo, negativo.
	// OBS: Por hora considere o 0 como sendo um número negativo.

    let numero = Number(prompt("Digite um numero: "));
    if (numero > 0 ) {
        prompt("Numero escolhiedo é Positivo");
    } else {
        prompt("Numero escolhido é Negativo");
    }

    //-----------------------------------------------------------------------------------

    // Aprovação em uma prova:
	// O usuário insere a nota de um aluno (0 a 100).
	// Se a nota for maior ou igual a 60, exibir "Aprovado", senão "Reprovado".

    let nota = Number(prompt("Digite a nota do Aluno de ( 0 - 100 ):"));
    if(nota < 60) {
        prompt("Reprovado.");
    } else {
        prompt("Aluno Aprovado com Sucesso !!");
    }

    //------------------------------------------------------------------------------------

    // Verificar se um número é positivo, negativo ou zero:
	// Peça ao usuário para inserir um número.
	// Use um if-else para verificar se o número é positivo, negativo ou zero.

    let numero1 = Number(prompt("Digite um numero."));
    if(numero1 > 0 ) {
        prompt("O numero é Positivo");
    } else if (numero1 < 0) {
        prompt("O numero é Negativo")
    } else {
        prompt("O numero e Zero.")
    }

    //--------------------------------------------------------------------------------------

    // Classificação de idade:
	// Peça ao usuário para inserir sua idade.
	// Exiba se ele é "Criança" (0-12), "Adolescente" (13-17) ou "Adulto" (18+).

    let idade1 = Number(prompt("Digite sua Idade:"));
    if(idade1 <= 12) {
        prompt("Classificação: Criança")
    } else if (idade1 <= 17) {
        prompt("Classificação: Adolescente")
    } else {
        prompt("Classificação: Adulto")
    }

    //------------------------------------------------------------------------------------------

    // Verificar se um número é par ou ímpar:
	// Peça ao usuário para inserir um número.
	// Use o operador % para verificar se o número é divisível por 2. 

    let numero2 = Number(prompt("Digite um numero:"));
    if(numero2 % 2 === 0) {
        prompt("Numero divisível por Dois.")
    } else {
        prompt("Numero não é divisível por Dois.")
    }

    //--------------------------------------------------------------------------------------------

    // Calculadora simples: 
	// Peça dois números e uma operação (+, -, *, /).
	// Use um if-else para calcular o resultado e exibi-lo.


    let num1 = Number(prompt("Digite o primeiro número:"));
    let operacao = prompt("Digite a operação (+, -, *, /):");
    let num2 = Number(prompt("Digite o segundo número:"));

    let resultado;

    if (operacao === "+") {
        resultado = num1 + num2;
    } else if (operacao === "-") {
        resultado = num1 - num2;
    } else if (operacao === "*") {
        resultado = num1 * num2;
    } else if (operacao === "/") {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            resultado = "Erro (divisão por zero)";
        }
    } else {
        resultado = "Operação Inválida";
    }
    prompt("O resultado da operação é: " + resultado);
















