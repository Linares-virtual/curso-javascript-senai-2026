
const campoCep = document.getElementById("cep");
const botaoBuscar = document.getElementById("botao-buscar");
const campoRua = document.getElementById("rua");
const campoBairro = document.getElementById("bairro");
const campoCidade = document.getElementById("cidade");
const campoEstado = document.getElementById("estado");

function preencherCampos(dados) {

    campoRua.value = dados.logradouro;
    campoBairro.value = dados.bairro;
    campoCidade.value = dados.localidade;
    campoEstado.value = dados.uf;

}

function limparCampos() {
    campoRua.value = "";
    campoBairro.value = "";
    campoCidade.value = "";
    campoEstado.value = "";
}

function buscaCep() {

    const cep = campoCep.value.replace("-", "").trim();

    if (cep.length !== 8) {
        alert("CEP inválido!");
        limparCampos();
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    // faz a requisição HTTP para URL da API
    // busca as informações dentro do Viacep
    fetch(url)
        .then(response => response.json()) // quando a resposta chega, converte para json
        .then(dados => {

            // Verfificar se a API retornou com erro (CEP não exixte)
            if (dados.erro) {
                alert("CEP não encontrado !");
                limparCampos();
                return;

            }

            // se der tudo certo, preenche os campos com os dados recebidos 
            preencherCampos(dados);
        })

        // Caso aconteça algum erro na requisição (ex. sem internet)

        .catch(() => {
            alert("Erro ao buscar o CEP");
        })
    }

        botaoBuscar.addEventListener("click", buscaCep);


