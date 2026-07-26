// Versão v1.2
async function TempoRS() {
    const API_url = 'https://api.open-meteo.com/v1/';
    const resposta = new Response();

    const forecast = 'forecast?';
    const latitude = '-30.0811';
    const longitude = '-51.0233';

    console.table(`${API_url}${forecast}${latitude}&${longitude}`);
}

TempoRS();