
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;

document.querySelector("#lastModified").textContent =
    `Última modificação: ${document.lastModified}`;

const temperatura = 8;
const velocidadeVento = 12;

function calcularSensacaoTermica(temperatura, velocidadeVento) {
    return 13.12 + 0.6215 * temperatura - 11.37 * Math.pow(velocidadeVento, 0.16) + 0.3965 * temperatura * Math.pow(velocidadeVento, 0.16);
}

const windchillElement = document.querySelector("#windchill");

if (temperatura <= 10 && velocidadeVento > 4.8) {
    const sensacaoTermica = calcularSensacaoTermica(
        temperatura,
        velocidadeVento
    );

    windchillElement.textContent =
        `${sensacaoTermica.toFixed(1)} °C`;
} else {
    windchillElement.textContent = "N/A";
}
