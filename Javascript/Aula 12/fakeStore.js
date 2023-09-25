
const produtos = document.getElementById('produtos');
const nomeProduto = document.querySelector('#nomeProduto');
const imagemProduto = document.querySelector('#imagemProduto');
const descricaoProduto = document.querySelector('#descricaoProduto');
const precoProduto = document.querySelector('#precoProduto');

fetch('https://fakestoreapi.com/products?limit=100')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const novoHTML = data.map(item => 
     `
      <div id="produtos">
      <div class="card">
      <span id="nomeProduto">${item.title}</span>
      <img id="imagemProduto" src="${item.image}" alt="Imagem do produto">
      <div class="descricao">
      <p id="descricaoProduto">${item.description}</p>
      <h4 id="precoProduto">R$ ${item.price}</h4>
      </div>
      </div>
    `
    )
    produtos.innerHTML += novoHTML;
  })
