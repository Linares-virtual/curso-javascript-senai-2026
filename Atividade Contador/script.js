const displayContador = document.getElementById('contador');

const botao = document.getElementById('btnIncrementar');


let valorAtual = 0;

botao.addEventListener('click', () => {

    valorAtual++;

    displayContador.innerText = valorAtual;

});