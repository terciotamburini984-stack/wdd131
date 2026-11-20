

const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005, 7 de agosto",
        area: 11500,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888, 21 de maio",
        area: 74792,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015, 7 de junho",
        area: 96630,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020, 2 de maio",
        area: 6861,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974, 19 de novembro",
        area: 156558,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986, 10 de janeiro",
        area: 9600,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983, 2 de dezembro",
        area: 116642,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Salt Lake Utah",
        localizacao: "Salt Lake City, Utah, Estados Unidos",
        consagracao: "1893, 6 de abril",
        area: 382207,
        urlDaImagem: "imagens/salt-lake.jpg"
    },
    {
        nomeDoTemplo: "Roma Italia",
        localizacao: "Roma, Itália",
        consagracao: "2019, 10 de março",
        area: 41010,
        urlDaImagem: "imagens/roma-italia.jpg"
    },
    {
        nomeDoTemplo: "Taylorsville Utah",
        localizacao: "Taylorsville, Utah, Estados Unidos",
        consagracao: "2024, 2 de junho",
        area: 73492,
        urlDaImagem: "imagens/taylorsville.jpg"
    }

];

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

