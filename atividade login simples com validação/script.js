
const usuarioCorreto = "admin";
const senhaCorreta = "1234";

const campoUsuario = document.querySelector("#userInput");
const campoSenha = document.querySelector("#passInput");
const botaoEntrar = document.querySelector("#btnLogin");
const feedback = document.querySelector("#mensagem");

botaoEntrar.addEventListener("click", function () {
    const valorUsuario = campoUsuario.value;
    const valorSenha = campoSenha.value;

    if (valorUsuario === usuarioCorreto && valorSenha === senhaCorreta) {
        alert("Login realizado com sucesso");

        feedback.innerText = "Bem-vindo, Administrador!";
        feedback.style.color = "green";
    } else {
        alert("Usuário ou senha inválidos");

        feedback.innerText = "Erro: Dados incorretos. Tente novamente.";
        feedback.style.color = "red";
    }
});