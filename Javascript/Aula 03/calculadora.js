const resultado = document.getElementById('resultado');
const somar = document.getElementById('somar');
const subtrair = document.getElementById('subtrair');
const dividir = document.getElementById('dividir');
const multiplicar = document.getElementById('multiplicar');

somar.addEventListener('click', soma)
subtrair.addEventListener('click', sub)
dividir.addEventListener('click', divi)
multiplicar.addEventListener('click', mult)

function soma() {
    var valor1 = document.getElementById('n1').value
    var valor2 = document.getElementById('n2').value
    var resposta = Number(valor1) + Number(valor2);
    resultado.innerHTML = resposta;
}
function sub() {
    var valor1 = document.getElementById('n1').value
    var valor2 = document.getElementById('n2').value
    var resposta = Number(valor1) - Number(valor2);
    resultado.innerHTML = resposta;
}
function divi() {
    var valor1 = document.getElementById('n1').value
    var valor2 = document.getElementById('n2').value
    var resposta = Number(valor1) / Number(valor2);
    resultado.innerHTML = resposta;
}
function mult() {
    var valor1 = document.getElementById('n1').value
    var valor2 = document.getElementById('n2').value
    var resposta = Number(valor1) * Number(valor2);
    resultado.innerHTML = resposta;
}