async function LerArquivoJson() {
    
    try {
        const esseArquivo = await fetch('../../Docs_JSON/produtos_simples.json');
        const convercaoJson = await esseArquivo.json();

        const card = document.querySelector('.Card');
        const imgPasta = ('../../Docs_JSON/qualidade_premiada.jpg');

        convercaoJson.forEach(item => {
            if (!item.promo) {
                card.innerHTML += `
                    <div class="IMG">
                        <img src="${imgPasta}" alt="Produto">
                    </div>
                    <div class="Desc">
                        <span class="Nome">${item.nome}</span>
                        <span class="Preco">${item.preco}</span>
                    </div>
                `;
            } else{
                card.innerHTML += `
                    <span class="Promo">${item.promo}</span>
                    <div class="IMG">
                        <img src="${imgPasta}" alt="Produto"></img>
                    </div>
                    <div class="Desc">
                        <span class="Nome">${item.nome}</span>
                        <span class="Preco">${item.preco}</span>
                    </div>
                `;
                const promo = document.querySelector('.Promo');
                promo.style.display = 'flex';
            }
        });
    } catch {
        console.log('Erro no catch');
    }
}

LerArquivoJson();