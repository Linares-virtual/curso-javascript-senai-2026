

const botaoLike = document.getElementById('btnLike');
const displayLike = document.getElementById('contLike');
const botaoDislike = document.getElementById('btnDislike');
const displayDislike = document.getElementById('contDislike');
const displayStatus = document.getElementById('status');

let totalLikes = 0;
let totalDislikes = 0;


botaoLike.addEventListener('click', () => {
    totalLikes++;

    displayLike.innerText = totalLikes;
    displayStatus.innerText = "Você curtiu! ❤️";

    botaoLike.style.backgroundColor = "lightgreen";
    setTimeout(() => botaoLike.style.backgroundColor = "", 200);
});


botaoDislike.addEventListener('click', () => {
    totalDislikes--;

    displayDislike.innerText = totalDislikes;
    displayStatus.innerText = "Feedback registrado! ❌";

    botaoDislike.style.backgroundColor = "lightcoral";
    setTimeout(() => botaoDislike.style.backgroundColor = "", 200);
});

