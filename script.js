// ==========================================================================
// CONTROLE DO MODAL: SISTEMA DE FINANÇAS
// ==========================================================================
const modalFinancas = document.getElementById("modal-financas");
const btnAbrirFinancas = document.getElementById("abrir-case-financas");
const btnFecharFinancas = document.querySelector(".fechar-modal");

btnAbrirFinancas.addEventListener("click", () => {
    modalFinancas.style.display = "flex";
});

btnFecharFinancas.addEventListener("click", () => {
    modalFinancas.style.display = "none";
});


// ==========================================================================
// CONTROLE DO MODAL: APP DE CLIMA
// ==========================================================================
const modalClima = document.getElementById("modal-clima");
const btnAbrirClima = document.getElementById("abrir-case-clima");
const btnFecharClima = document.getElementById("fechar-clima");

btnAbrirClima.addEventListener("click", () => {
    modalClima.style.display = "flex";
});

btnFecharClima.addEventListener("click", () => {
    modalClima.style.display = "none";
});


// ==========================================================================
// FECHAR MODAIS AO CLICAR FORA DA CAIXA
// ==========================================================================
window.addEventListener("click", (event) => {
    if (event.target === modalFinancas) {
        modalFinancas.style.display = "none";
    }
    if (event.target === modalClima) {
        modalClima.style.display = "none";
    }
});