async function lerJson() {
    try {
        // Essenciais
        const container = document.querySelector('.Container');
        const divBtns = document.querySelector('.Div-info');
        const btnVerMais = document.querySelector('.Ver-Mais');
        const imgPasta = '../../Docs_JSON/qualidade_premiada.jpg';

        // 1. Buscar e Converter JSON
        const garcom = await fetch('../../Docs_JSON/produtos_simples.json');
        const ingredientes = await garcom.json();

        // 2. Função auxiliar - Criar Estrutura do Card
        const CriarCard = (item) => {
            const temPromo = Boolean(item.promo);

            return `
                <div class="Card">
                    ${temPromo ? `<span class="Promo">R$: ${item.promo}</span>` : ''}
                    <div class="IMG">
                        <img src="${imgPasta}" alt="${item.nome}" loading="lazy">
                    </div>
                    <div class="Desc">
                        <span class="Preco">${item.nome}</span>
                        <span class="Preco" ${temPromo ? 'style="text-decoration: line-through;"' : ''}>R$: ${item.preco}</span>
                    </div>
                </div>
            `;
        };

        // 3. Renderizar os 10 primeiros itens
        const divPrimeiro = document.createElement('div');
        divPrimeiro.classList.add('Primeiro');
        divPrimeiro.innerHTML = ingredientes.slice(0, 10).map(CriarCard).join('');

        // 4. Renderiza do item 10 em diante (Começa escondido)
        const divRestante = document.createElement('div');
        divRestante.classList.add('Restante');
        divRestante.style.display = 'none';
        divRestante.innerHTML = ingredientes.slice(0).map(CriarCard).join('');

        // Injetar as divs no Container
        container.appendChild(divPrimeiro);
        container.appendChild(divRestante);

        // 5. Cria o botão "Ver Menos"
        const btnVerMenos = document.createElement('button');
        btnVerMenos.classList.add('Ver-Menos');
        btnVerMenos.textContent = 'Ver Menos';
        btnVerMenos.style.display = 'none';
        divBtns.appendChild(btnVerMenos);

        // 6. Lógica de Alternância
        btnVerMais.addEventListener("click", () => {
            divRestante.style.display = 'grid';
            divPrimeiro.style.display = 'none';
            btnVerMais.style.display = 'none';
            btnVerMenos.style.display = 'block';
        });

        btnVerMenos.addEventListener("click", () => {
            divRestante.style.display = 'none';
            divPrimeiro.style.display = 'grid'
            btnVerMais.style.display = 'block';
            btnVerMenos.style.display = 'none';
        });

        
    } catch (error) {
        console.error('Erro ao carregar ou processar o JSON:', error);
    }
}

lerJson();