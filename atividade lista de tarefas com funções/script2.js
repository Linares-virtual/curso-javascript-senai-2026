const inputTarefa = document.getElementById("input-tarefa");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");


const elementoContador = document.getElementById("contador"); 
const botaoLimparTudo = document.getElementById("botao-limpar");

let tarefas = [];

function salvarTarefas() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function mostrarTarefas() {
    listaTarefas.innerHTML = "";

    for(let i = 0; i < tarefas.length; i++) {
        const li = document.createElement("li");
        
        
        if (tarefas[i].concluida) {
            li.style.textDecoration = "line-through";
            li.style.opacity = "0.6";
        }

        li.innerText = tarefas[i].texto;

        
        const botaoCheck = document.createElement("button");
        botaoCheck.innerText = tarefas[i].concluida ? "↩️" : "✅";
        botaoCheck.onclick = () => alternarConcluida(i);

        const botaoRemover = document.createElement("button");
        botaoRemover.innerText = "🗑️";
        botaoRemover.className = "botao-remover";
        botaoRemover.onclick = () => removerTarefas(i);

        li.prepend(botaoCheck); // Coloca o check antes do texto
        li.appendChild(botaoRemover);
        listaTarefas.appendChild(li);
    }

    
    elementoContador.innerText = `Tarefas: ${tarefas.length}`;
}

function adicionarTarefas() {
    const valorTarefa = inputTarefa.value.trim();

    if(valorTarefa === "") {
        alert("Digite uma tarefa!");
        return;
    }

    
    const jaExiste = tarefas.find(t => t.texto.toLowerCase() === valorTarefa.toLowerCase());
    if (jaExiste) {
        alert("Essa tarefa já está na lista!");
        return;
    }

    
    tarefas.push({
        texto: valorTarefa,
        concluida: false
    });
    
    inputTarefa.value = "";
    salvarTarefas();
    mostrarTarefas();
}


function alternarConcluida(posicao) {
    tarefas[posicao].concluida = !tarefas[posicao].concluida;
    salvarTarefas();
    mostrarTarefas();
}


botaoLimparTudo.onclick = () => {
    if (confirm("Deseja apagar toda a lista?")) {
        tarefas = [];
        salvarTarefas();
        mostrarTarefas();
    }
};

function removerTarefas(posicaoTarefa) {
    tarefas.splice(posicaoTarefa, 1);
    salvarTarefas();
    mostrarTarefas();
}

function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem("tarefas");
    if(tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas);
        mostrarTarefas();
    }
}

botaoAdicionar.addEventListener("click", adicionarTarefas);
carregarTarefas();