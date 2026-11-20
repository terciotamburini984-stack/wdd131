

const container = document.querySelector("#temple-cards");
const tituloPagina = document.querySelector("#page-title");
const linksNavegacao = document.querySelectorAll("#navigation a");

function exibirTemplos(listaDeTemplos) {
    container.innerHTML = "";

    listaDeTemplos.forEach((templo) => {
        const cartao = document.createElement("section");
        cartao.classList.add("temple-card");

        const nome = document.createElement("h2");
        nome.textContent = templo.nomeDoTemplo;

        const localizacao = document.createElement("p");
        localizacao.innerHTML = "<strong>Localização:</strong> ";
        localizacao.append(document.createTextNode(templo.localizacao));

        const consagracao = document.createElement("p");
        consagracao.innerHTML = "<strong>Consagração:</strong> ";
        consagracao.append(document.createTextNode(templo.consagracao));

        const area = document.createElement("p");
        area.innerHTML = "<strong>Área:</strong> ";
        area.append(document.createTextNode(
            `${templo.area.toLocaleString("pt-BR")} pés²`
        ));

        const imagem = document.createElement("img");
        imagem.src = templo.urlDaImagem;
        imagem.alt = `Templo de ${templo.nomeDoTemplo}`;
        imagem.loading = "lazy";
        imagem.width = 400;
        imagem.height = 250;

        cartao.appendChild(nome);
        cartao.appendChild(localizacao);
        cartao.appendChild(consagracao);
        cartao.appendChild(area);
        cartao.appendChild(imagem);

        container.appendChild(cartao);
    });
}

function obterAnoConsagracao(templo) {
    return Number(templo.consagracao.substring(0, 4));
}

function filtrarTemplos(filtro) {
    let templosFiltrados = [];

    switch (filtro) {
        case "old":
            templosFiltrados = templos.filter(
                (templo) => obterAnoConsagracao(templo) < 1900
            );
            tituloPagina.textContent = "Templos Antigos";
            break;

        case "new":
            templosFiltrados = templos.filter(
                (templo) => obterAnoConsagracao(templo) > 2000
            );
            tituloPagina.textContent = "Templos Novos";
            break;

        case "large":
            templosFiltrados = templos.filter(
                (templo) => templo.area > 90000
            );
            tituloPagina.textContent = "Templos Grandes";
            break;

        case "small":
            templosFiltrados = templos.filter(
                (templo) => templo.area < 10000
            );
            tituloPagina.textContent = "Templos Pequenos";
            break;

        default:
            templosFiltrados = templos;
            tituloPagina.textContent = "Página Inicial";
    }

    exibirTemplos(templosFiltrados);
}

linksNavegacao.forEach((link) => {
    link.addEventListener("click", (evento) => {
        evento.preventDefault();

        const filtro = link.dataset.filter;

        filtrarTemplos(filtro);

        linksNavegacao.forEach((item) => {
            item.classList.remove("active");
            item.removeAttribute("aria-current");
        });

        link.classList.add("active");
        link.setAttribute("aria-current", "page");

        const navegacao = document.querySelector("#navigation");
        const botaoMenu = document.querySelector("#menu");

        navegacao.classList.remove("open");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.innerHTML = "&#9776;";
    });
});

const botaoMenu = document.querySelector("#menu");
const navegacao = document.querySelector("#navigation");

botaoMenu.addEventListener("click", () => {
    const aberto = navegacao.classList.toggle("open");

    botaoMenu.setAttribute("aria-expanded", String(aberto));
    botaoMenu.innerHTML = aberto ? "&times;" : "&#9776;";
});

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Última modificação: ${document.lastModified}`;

exibirTemplos(templos);

