const progress = document.getElementById("progress");

window.addEventListener("scroll", () => {

    const alturaTotal =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progresso = (window.scrollY / alturaTotal) * 100;

    if (progress) {
        progress.style.width = progresso + "%";
    }

});


// Botão voltar ao topo

const botaoTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {

    if (!botaoTopo) return;

    if (window.scrollY > 300) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }

});


if (botaoTopo) {

    botaoTopo.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// Animação dos cards

const cards = document.querySelectorAll(".card");


if (cards.length > 0) {

    const observer = new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.2
    });


    cards.forEach(card => {

        observer.observe(card);

    });

}


// Atualizar ano automaticamente

const ano = document.getElementById("ano");

if (ano) {

    ano.textContent = new Date().getFullYear();

}


// Rolagem suave do menu

const links = document.querySelectorAll("nav a");


links.forEach(link => {

    link.addEventListener("click", function(e){

        const destino = document.querySelector(
            this.getAttribute("href")
        );


        if (destino) {

            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Animação ao carregar página

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});