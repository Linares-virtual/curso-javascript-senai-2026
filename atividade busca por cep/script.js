    const cepsMockados = {
        "01001000": {
            logradouro: "Praça da Sé",
            bairro: "Sé",
            localidade: "São Paulo",
            uf: "SP"
        },

        "20040002": {
            logradouro: "Rua da Assembleia",
            bairro: "Centro",
            localidade: "Rio de Janeiro",
            uf: "RJ"
        },

        "30140071": {
            logradouro: "Avenida Brasil",
            bairro: "Santa Efigênia",
            localidade: "Belo Horizonte",
            uf: "MG"
        },

        "80010000": {
            logradouro: "Praça Tiradentes",
            bairro: "Centro",
            localidade: "Curitiba",
            uf: "PR"
        }
    };


    const campoCep = document.getElementById("cep");
    const botaoBuscar = document.getElementById("botao-buscar");
    const campoRua = document.getElementById("rua");
    const campoBairro = document.getElementById("bairro");
    const campoCidade = document.getElementById("cidade");
    const campoEstado = document.getElementById("estado"); console.log(botaoBuscar)

    function preencherCampos(dados){

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

    function buscarCep() {

        // pega o valor digitado no campo e remove tudo que não for número (\D)
        // é ooposto de \d que representa os digitos numéricos (0-9)
        // g -> significa "global", o que quer dizer que estamos aplicando a remoção em todos os caracteres, não só no primeiro.
        // trim() -> remove espaços do inicio e no fim.

    const cep = campoCep.value.replace(/\D/g, "").trim();

    if(cep.length !== 8) {
        alert("CEP inválido!");
        limparCampos();
        return;
    }

    const dadosCep = cepsMockados[cep]; //pega o cep e armazena dentro de dados

    if(!dadosCep) { // se o cep digitado não exixtir
        alert("CEP não encontrado na base de dados.");
        limparCampos();
        return;
    }

        preencherCampos(dadosCep);
    }

    botaoBuscar.addEventListener("click", buscarCep);