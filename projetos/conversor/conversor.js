document.addEventListener("DOMContentLoaded", function () {
    const temperaturaInput = document.getElementById("temperatura");
    const unidadeTemperaturaSelect = document.getElementById("unidadeTemperatura");
    const converterButton = document.getElementById("converter");
    const resultadoDiv = document.getElementById("resultado");

    converterButton.addEventListener("click", function () {
        const temperatura = parseFloat(temperaturaInput.value);

        if (!isNaN(temperatura)) {
            const unidadeTemperatura = unidadeTemperaturaSelect.value;
            const resultado = converterTemperatura(temperatura, unidadeTemperatura);
            resultadoDiv.textContent = resultado;
        } 
        else {
            resultadoDiv.textContent = "Por favor, digite uma temperatura válida.";
        }
    });

    function converterTemperatura(temperatura, unidadeTemperatura) {
        let resultado;
        switch (unidadeTemperatura) {
            case "celsius":
                resultado = Fahrenheit = `${celsiusParaFahrenheit(temperatura).toFixed(2)}°F`;
                break;
            case "fahrenheit":
                resultado = Celsius = `${fahrenheitParaCelsius(temperatura).toFixed(2)}°C`;
                break;
        }
        return resultado;
    }

    function celsiusParaFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    function fahrenheitParaCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }
});