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


// ==========================================================================
// SCROLL SUAVE PARA OS LINKS DO MENU
// ==========================================================================
const linksMenu = document.querySelectorAll('nav ul li a[href^="#"]');

linksMenu.forEach(link => {
    link.addEventListener("click", function (event) {
        // Previne o comportamento padrão do clique seco
        event.preventDefault();

        // Pega o ID do alvo (ex: "#projetos")
        const idAlvo = this.getAttribute("href");
        const secaoAlvo = document.querySelector(idAlvo);

        if (secaoAlvo) {
            // Desliza suavemente até a seção
            secaoAlvo.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});