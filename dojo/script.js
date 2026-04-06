// 1. Coleta de dados iniciais
const nome = prompt("Digite o nome do vendedor:");
const nivel = prompt("Digite o nível do vendedor (I, II ou III):").toUpperCase();
const vendas = parseFloat(prompt("Quanto o vendedor vendeu? (Apenas números)"));

let bonificacaoPercentual = 0;
let mensagemEspecial = "";

// 2. Processamento das regras por nível
if (nivel === "I") {
    if (vendas > 80000) {
        mensagemEspecial = `O vendedor ${nome}, nível I foi promovido ao nível II.`;
    } else if (vendas > 50000) {
        bonificacaoPercentual = 0.35;
    } else if (vendas > 20000) {
        bonificacaoPercentual = 0.20;
    } else if (vendas < 5000) {
        mensagemEspecial = `O vendedor ${nome}, nível I, está em risco de demissão.`;
    }

} else if (nivel === "II") {
    if (vendas > 200000) {
        mensagemEspecial = `O vendedor ${nome}, nível II, foi promovido ao nível III.`;
    } else if (vendas > 120000) {
        bonificacaoPercentual = 0.40;
    } else if (vendas > 90000) {
        bonificacaoPercentual = 0.25;
    } else if (vendas < 50000) {
        mensagemEspecial = `O vendedor ${nome}, nível II, está em risco de virar nível I.`;
    }

} else if (nivel === "III") {
    if (vendas > 500000) {
        mensagemEspecial = `O vendedor ${nome}, nível III, virou o dono da firma!`;
    } else if (vendas > 250000) {
        bonificacaoPercentual = 0.45;
    } else if (vendas > 210000) {
        bonificacaoPercentual = 0.30;
    } else if (vendas < 100000) {
        mensagemEspecial = `O vendedor ${nome}, nível III, está em risco de virar nível II.`;
    }

} else {
    alert("Nível inválido inserido.");
}

// 3. Exibição dos resultados
// Se houver bonificação (maior que zero), exibe a mensagem de aumento
if (bonificacaoPercentual > 0) {
    const valorAumento = vendas * bonificacaoPercentual;
    alert(`O vendedor ${nome}, nível ${nivel}, deverá receber uma bonificação de R$ ${valorAumento.toFixed(2)}.`);
}

// Se houver um alerta de promoção ou risco, exibe-o
if (mensagemEspecial !== "") {
    alert(mensagemEspecial);
}