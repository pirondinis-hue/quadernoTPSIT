// TODO scrivi lo script
// Selezione degli elementi del DOM
const inputA = document.getElementById("a");
const inputB = document.getElementById("b");
const inputC = document.getElementById("c");
const buttonCalcola = document.getElementById("btn-calcola");
const soluzione1 = document.getElementById("soluzione1");
const soluzione2 = document.getElementById("soluzione2");

function calcolaEquazione() {
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
    const c = parseFloat(inputC.value);

    soluzione1.textContent = "";
    soluzione2.textContent = "";

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        soluzione1.textContent = "Per favore, inserisci tutti i coefficienti.";
        return;
    }

    if (a === 0) {
        if (b !== 0) {
            const x = -c / b;
            soluzione1.textContent = `Non è di 2° grado (a=0). Soluzione di 1° grado: x = ${x}`;
        } else if (c === 0) {
            soluzione1.textContent = "Equazione indeterminata (0 = 0)";
        } else {
            soluzione1.textContent = "Equazione impossibile";
        }
        return;
    }

    const delta = b * b - 4 * a * c;

    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        soluzione1.textContent = `x₁ = ${x1}`;
        soluzione2.textContent = `x₂ = ${x2}`;
    } else if (delta === 0) {
        const x = -b / (2 * a);
        soluzione1.textContent = `x₁ = x₂ = ${x}`;
    } else {
        soluzione1.textContent = "Nessuna soluzione reale (Δ < 0)";
    }
}

buttonCalcola.addEventListener("click", calcolaEquazione);



