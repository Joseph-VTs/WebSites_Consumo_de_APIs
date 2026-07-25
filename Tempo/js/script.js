// Versão v1.1
// Exemplo pegando o tempo de São Paulo (Lat: -23.55, Long: -46.63)
async function buscarPrevisao() {
  try {
    console.log("Buscando dados do tempo...");

    // 1. Faz a requisição na API
    const resposta = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current=temperature_2m,wind_speed_10m"
    );

    // 2. Converte a resposta bruta para JSON (um objeto JS)
    const dados = await resposta.json();

    // 3. Usa os dados!
    const temperatura = dados.current.temperature_2m;
    const velocidadeVento = dados.current.wind_speed_10m;
    const unidadeTemp = dados.current_units.temperature_2m;

    console.log(`🌡️ Temperatura atual: ${temperatura}${unidadeTemp}`);
    console.log(`💨 Vento: ${velocidadeVento} km/h`);

  } catch (erro) {
    // Caso a internet caia ou a URL esteja errada
    console.error("Ops! Algo deu errado ao buscar o tempo:", erro);
  }
}

// Chama a função
buscarPrevisao();