// Guardar um item no localstorage
//localStorage.setItem('teste', 'Clayton');
// Guardar um item na sessionstorage
//sessionStorage.setItem('teste', 'Clayton');

//Para 'PEGAR' os dados de um storage e salvar numa variavel
//const testeLocalStorage = localStorage.getItem('teste');
//const testeSessionStorage = sessionStorage.getItem('teste');

// Jogando a variavel no HTML para mostrar ao usuario
//divLocal.innerHTML = testeLocalStorage;
//divSession.innerHTML = testeSessionStorage;

// Para remover um item do BD
// Colocar a key nos parametros
// localStorage.removeItem('teste');

const divLocal = document.getElementById('local');
const divSession = document.getElementById('session');

//Criando uma array
const nomes = ['Clayton', 'Luciano', 'Renata', 'Maria Clara'];

//Guardando a array no localstorage ao mesmo tempo transformando a array em string pq o storage só aceita strings
localStorage.setItem('teste', JSON.stringify(nomes));

//O parse transforma novamente a string para array para manipularmos
const recuperarArray = JSON.parse(localStorage.getItem('teste'));

// Para adicionar um novo item no array
recuperarArray.push('João');

//Para deletar um item dentro da array
//recuperarArray.filter()

console.log(JSON.parse(localStorage.getItem('teste')));