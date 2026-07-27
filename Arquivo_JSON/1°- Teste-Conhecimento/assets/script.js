
const is_promo = true;

// construção de um montagem_Card
const montagem_card = [
    {img_pasta: './assets/qualidade_premiada.jpg'},
    {Nome: document.querySelector('.Nome')},
    {Preco: document.querySelector('.Preco')},
    {Promo: document.querySelector('.Promo')},
    {IMG: document.querySelector('.IMG')}
]

// const conteudo = document.querySelector('.Card');

if(!is_promo){
    montagem_card[1].Nome.textContent = 'Produto de Qualidade';
    montagem_card[2].Preco.textContent = 'R$ 19.99';
    montagem_card[3].Promo.style.display = 'none';
    montagem_card[4].IMG.innerHTML += `<img src="${montagem_card[0].img_pasta}" alt="Produto"></img>`;
} else{
    montagem_card[1].Nome.textContent = 'Produto de Qualidade';

    montagem_card[2].Preco.style.textDecoration = 'line-through';
    montagem_card[2].Preco.style.textDecorationColor = 'red';
    montagem_card[2].Preco.style.textDecorationThickness = '2px';
    montagem_card[2].Preco.textContent = 'R$ 19.99';

    montagem_card[3].Promo.style.display = 'flex';
    montagem_card[3].Promo.textContent = is_promo;

    montagem_card[4].IMG.innerHTML += `<img src="${montagem_card[0].img_pasta}" alt="Produto"></img>`;
}