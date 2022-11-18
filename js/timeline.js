const html = {
    tab: [...document.querySelector(".tl-passos").children],
    conteudos: [...document.querySelector(".tl-tabs").children],
};

function TabsNavigation() {
    function init() {
        esconderConteudo();
        esperarClique();
    }
    function esconderConteudo() {
        html.conteudos.forEach((section) => {
            section.style.display = "none";
        });
    }
    function esperarClique() {
        html.tab.forEach((tab) => {
            tab.addEventListener("click", selecionarTab);
        });
    }
    function selecionarTab(event) {
        esconderConteudo();
        removerActiveClass();

        const tab = event.currentTarget;
        mostraTabAtual(tab.dataset.id);

        tab.className += " completo";
    }
    function removerActiveClass() {
        html.tab.forEach((li) => {
            li.className = li.className.replace("active", "");
        });
    }
    function mostraTabAtual(id) {
        esconderConteudo();
        const tabAtual = document.querySelector("#" + id);
        tabAtual.style.display = "flex";
    }

    return {
        init,
    };
}

window.addEventListener("load", () => {
    const tabNavigation = TabsNavigation();
    tabNavigation.init();
});
