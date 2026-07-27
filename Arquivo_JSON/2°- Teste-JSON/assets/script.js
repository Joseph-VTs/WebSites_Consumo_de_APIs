async function lerArquivosJson() {
    const Cards = document.querySelector('.Cards');
    
    try{
        const esseArquivo = await fetch('../../Docs_JSON/produtos_simples.json');
        const convecaoJson = await esseArquivo.json()
        const imgPasta = ('../../Docs_JSON/qualidade_premiada.jpg');
        
        convecaoJson.forEach(item => {
            if(!item.promo){
                // Com Promo
                Cards.innerHTML += `
                    <div class="Card">
                        <div class="IMG">
                            <img src="${imgPasta}" alt="Produto">
                        </div>
                        <div class="Desc">
                            <span class="Nome">${item.nome}</span>
                            <span class="Preco">${item.preco}</span>
                        </div>
                    </div>
                `;
            } else{
                Cards.innerHTML += `
                    <div class="Card">
                    <span class="Promo">${item.promo}</span>
                        <div class="IMG">
                            <img src="${imgPasta}" alt="Produto">
                        </div>
                        <div class="Desc">
                            <span class="Nome">${item.nome}</span>
                            <span class="Preco">${item.preco}</span>
                        </div>
                    </div>
                `;
            }
        });
    }catch{
        console.log("Verifique: Deu Erro");
    }
}

lerArquivosJson();