
let itensLista = Array.from(document.querySelectorAll('li'));
// let itensLista2 = {...document.getElementsByTagName('li')};

// PEGOU O ELEMENTO DO HTML E CONVERTEU PARA ARRAY EM 2 FORMAS DIFERENTES PARA EXEMPLIFICAR
// O SEGUNDO MODELO É UM SPREAD

// MUDAR UM ITEM DA ARRAY 
itensLista[2].innerHTML = 'XABLAU'

// MUDAR TODOS OS ITENS DE UM ARRAY

for (let i = 0; i < itensLista.length; i++) {
    itensLista[i].innerHTML = "XABLAU";
    }

//forEach significa 'para cada item'
//elemento representa cada item do Array
itensLista.forEach( (elemento) => {
    elemento.innerHTML = 'XABLOU'
})

itensLista.map( (elemento) => {
    elemento.innerHTML = 'XAXAXAU'
})
