async function WeatherAPI() {
    const btnVerClima = document.getElementById('Ver-Clima');

    btnVerClima.addEventListener("click", async () => {
        const URL_Base = '';
        const garcom = await fetch(URL_Base);
        const ingredientes = await garcom.json();

        console.log(ingredientes);
    });
}

WeatherAPI();