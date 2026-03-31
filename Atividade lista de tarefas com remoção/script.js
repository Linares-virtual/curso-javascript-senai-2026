
const input = document.querySelector("#input-tarefa");
const botaoAdicionar = document.querySelector("#botao-adicionar");
const listaUl = document.querySelector("#lista");
const contadorTexto = document.querySelector("#contador");
const botaoLimpar = document.querySelector("#botao-limpar");

let totalTarefas = 0;

function atualizarContador() {
    contadorTexto.innerText = totalTarefas;
}

botaoAdicionar.addEventListener("click",  () => {
    const tarefaTexto = input.value.trim();

    if (tarefaTexto === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    const novoItem = document.createElement("li");
    novoItem.innerText = tarefaTexto;
    novoItem.style.cursor = "pointer";

    novoItem.addEventListener("click", () => {
        novoItem.remove();
        totalTarefas--;
        atualizarContador();
    });

    listaUl.appendChild(novoItem);

    input.value = "";
    totalTarefas++;
    atualizarContador();
});

botaoLimpar.addEventListener("click", () => {
    listaUl.innerHTML = "";
    totalTarefas = 0;
    atualizarContador();
});