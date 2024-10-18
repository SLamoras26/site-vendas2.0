const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener('click', () => {
    nav.classList.toggle('active');
});

let carrinho = [];
let total = 0;

function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = '';

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.produto} - R$ ${item.preco}`;
        listaCarrinho.appendChild(li);
    });

    document.getElementById('total').textContent = total.toFixed(2);
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('O carrinho está vazio!');
        return;
    }

    alert('Compra finalizada com sucesso!');
    carrinho = [];
    total = 0;
    atualizarCarrinho();
}