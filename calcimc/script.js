function calcularIMC() {
    const pes = parseFloat(document.getElementById('pes').value);
    const alt = parseFloat(document.getElementById('alt').value);

    if (isNaN(pes) || isNaN(alt) || pes <= 0 || alt <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const imc = calculateBMI(pes, alt);
    displayResult(imc);
}
function calculateBMI(pes, alt) {
    return pes / (alt ** 2);
}
function displayResult(imc) {
    const resultElement = document.getElementById('result');
    let interpretation = '';

    if (imc < 18.5) {
        interpretation = 'Abaixo do peso';
    } else if (imc < 24.9) {
        interpretation = 'Peso normal';
    } else if (imc < 29.9) {
        interpretation = 'Sobrepeso';
    } else {
        interpretation = 'Obesidade';
    }

    resultElement.innerHTML = `<p>Seu IMC é: ${imc.toFixed(2)}</p>`;
    resultElement.innerHTML += `<p>Interpretação: ${interpretation}</p>`;
}
