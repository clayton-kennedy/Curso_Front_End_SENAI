let container = document.querySelector('.container');

container.style.padding = '1em';
container.style.justifyContent = 'space-between';


// Criando o elemento
let quadrado = document.createElement('div');

// Criar uma class no elemento
quadrado.classList.add('quadrado');

// Colocar o elemento criado dentro do container no html
container.appendChild(quadrado)
// appendChild está adicionando um filho ao pai container

/* ====================================================== */

let circulo = document.createElement('div');

circulo.classList.add('circulo');

container.appendChild(circulo);

circulo.style.width = '5em';
circulo.style.height = '5em';
circulo.style.borderRadius = '50%';
circulo.style.backgroundColor = 'brown';

/* ====================================================== */

// CRIAR UM EVENTO A UM ELEMENTO PARA ELE SUMIR

let botao = document.querySelector('.botao');

botao.style.padding = '2em';

botao.addEventListener('click', () =>{
    circulo.classList.toggle('esconder');  
})

/* ====================================================== */