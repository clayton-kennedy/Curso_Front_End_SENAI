
const botao = document.querySelector('#botao');
const ulDaLista1 = document.querySelector('#ulDaLista1');
const ulDaLista2 = document.querySelector('#ulDaLista2');


// CHAMANDO O ELEMENTO LI QUE POR PADRAO VEM COMO NODELIST, E JÁ TRANSFORMANDO-O PARA ARRAY
const li = Array.from(document.querySelectorAll('li'));
// TAMBEM PODERIA SER: const li = [...document.querySelectorAll('li')];

// PARA PERCORRER CADA ITEM DENTRO DA ARRAY E FAZER ALGO
li.forEach((item) => {
// COM FUNÇAO ANONIMA É POSSIVEL CRIAR DENTRO DO MÉTODO forEach, NAO NECESSITANDO CRIAR FORA E TER QUE CHAMÁ-LA.
// forEach faz o mesmo que o for.
// CRIOU-SE UM ESCUTADOR PARA *CADA* ITEM DENTRO DA ARRAY E EM SEGUIDA EXECUTOU-SE UMA FUNCTION.
item.addEventListener('click', () => {
    item.classList.toggle('selecionado')
// AO SER CLICADO ELE CRIA A CLASSE .selecionado AO CSS PARA ESTILIZAÇÃO.
    })
})
// ADICIONA-SE UM EVENTO QUE IRÁ ESCUTAR O CLICK DO MOUSE E IRÁ EXECUTAR UMA FUNÇAO
botao.addEventListener('click', () => {
// PEGANDO INFO DOS LI DA DIV TODA
    const lista1 = document.querySelector('.lista1');
    const lista2 = document.querySelector('.lista2');
// PEGOU SÓ OS SELECIONADOS DA ARRAY DE CADA DIV
    const selecionadosLista1 = [...lista1.querySelectorAll('.selecionado')];
    const selecionadosLista2 = [...lista2.querySelectorAll('.selecionado')];
// AQUI A GENTE VAI PASSAR O ITEM DE UMA LISTA PARA OUTRA E APÓS REMOVE A CLASS selecionado
// DA LISTA1 PARA A 2
    selecionadosLista1.forEach((item) => {
        lista2.appendChild(item);
        item.classList.remove('selecionado');
    })
// DA LISTA2 PARA A 1
    selecionadosLista2.forEach((item) => {
        lista1.appendChild(item);
        item.classList.remove('selecionado');
    })
})