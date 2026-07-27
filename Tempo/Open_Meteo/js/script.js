async function CardTempo() {
    // const longitude = document.querySelector('.Longitude');
    // const latitude = document.querySelector('.Latitude');
    const btnBuscar = document.getElementById('btn-Buscar');

    const latitude = '-30.08';
    const longitude = '-51.02';

    btnBuscar.addEventListener("click", async () => {
        const url_daily = (`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_min,temperature_2m_max,sunrise,daylight_duration,sunshine_duration,wind_speed_10m_max,wind_speed_10m_max,wind_direction_10m_dominant`);
        const garcom_daily = await fetch(url_daily);
        const ingredientes_daily = await garcom_daily.json();
        console.log("Ingredientes Daily:", ingredientes_daily);

        // Current
        const url_current = (`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_direction_10m,wind_gusts_10m,showers,is_day,weather_code&timezone=auto&hourly=`);
        const garcom_current = await fetch(url_current);
        const ingredientes_current = await garcom_current.json();

        console.log('\nIngredientes Current:', ingredientes_current);

        // Current
        const url_hourly = (`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=relative_humidity_2m,apparent_temperature,rain,showers,weather_code,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,visibility,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m,wind_gusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_moisture_0_to_1cm`);
        const garcom_hourly = await fetch(url_hourly);
        const ingredientes_hourly = await garcom_hourly.json();

        console.log('\nIngredientes Hourly:', ingredientes_hourly);
    });

}

CardTempo();