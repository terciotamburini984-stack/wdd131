
const anoAtual = new Date().getFullYear();

document.querySelector("#anoatual").textContent = anoAtual;

const ultimaModificacao = document.lastModified;

document.querySelector("#ultimaModificacao").textContent =
    `Última Modificação: ${ultimaModificacao}`;