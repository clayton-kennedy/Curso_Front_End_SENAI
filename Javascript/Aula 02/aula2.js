
// TODA TAG HTML É UM ELEMENTO
// CAPTURA-SE PELO ID, CLASS, NOME, TAGNAME.

const mostrarH1 = document.getElementsByTagName('h1')
const mostrarDiv = document.getElementsByClassName('quadrado')
const mostrarDivis = document.getElementsByClassName('circulo')
const mostrarParagrafo = document.getElementsByClassName('paragrafo')
const mostrarItensTabela = document.getElementsByTagName('li')

console.log(mostrarH1)
console.log(mostrarDiv)
console.log(mostrarDivis)
console.log(mostrarItensTabela)
console.log(mostrarParagrafo)

// .getElement PEGA O PRIMEIRO ITEM QUE TIVER NO HTML, POR EXEMPLO UM <H1>
// .querySelector PEGA TODOS OS <H1> QUE TEM NO HTML

// QuerySelector = Selecione da consulta
// QuerySelectorALL = Selecione tudo da consulta

// const aprendendoQuery = document.querySelector('ul')
// const aprendendoQuery = document.querySelector('p')
// const aprendendoQuery = document.querySelector('.circulo')

const aprendendoQuery = document.querySelectorAll('.quadrado')

console.log(aprendendoQuery);