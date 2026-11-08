
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


document.querySelector("#lastModified").textContent =
    `Última modificação: ${document.lastModified}`;


const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.classList.toggle("open", isOpen);
    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );
});


const navLinks = document.querySelectorAll("#navigation a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuButton.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu de navegação");
    });
});
