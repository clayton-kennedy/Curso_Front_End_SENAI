
const produtos = document.getElementById('produtos');
const nomeProduto = document.querySelector('#nomeProduto');
const imagemProduto = document.querySelector('#imagemProduto');
const descricaoProduto = document.querySelector('#descricaoProduto');
const precoProduto = document.querySelector('#precoProduto');

fetch('https://fakestoreapi.com/products/category/electronics?limit=100')
  .then(response => response.json())
  .then(dadosProdutos => {
    console.log(dadosProdutos);
    const novoHTML = dadosProdutos.map(item => 
     `
      <div id="produtos">
      <div class="card">
      <span id="nomeProduto">${item.title}</span>
      <img id="imagemProduto" src="${item.image}" alt="Imagem do produto">
      <div class="descricao">
      <p id="descricaoProduto">${item.description}</p>
      <h4 id="precoProduto">R$ ${item.price}</h4>
      <button id="comprar">Comprar</button>
      </div>
      </div>
    `
    )
    produtos.innerHTML += novoHTML;
  })


/* RESOLUÇÃO DO PROFESSOR 

  fetch('https://fakestoreapi.com/products/category/electronics?limit=100')
  .then(response => response.json())
  .then(dadosProdutos => {

    dadosProdutos.forEach(dadosProdutos => {
      produtos.innerHTML += 
      `     
      <div id="produtos">
      <div class="card">
      <span id="nomeProduto">${dadosProdutos.title}</span>
      <img id="imagemProduto" src="${dadosProdutos.image}" alt="Imagem do produto">
      <div class="descricao">
      <p id="descricaoProduto">${dadosProdutos.description}</p>
      <h4 id="precoProduto">R$ ${dadosProdutos.price}</h4>
      <button id="comprar">Comprar</button>
      </div>
      </div>
      `;
    })
  });
*/