const div = document.getElementById('resposta')
const somar = document.getElementById('somar');

somar.addEventListener('click', somar)
function calculo() {
    var valor1 = document.getElementById('n1').value
    var valor1 = document.getElementById('n2').value
    var resposta = Number(valor1) + Number(valor2);
    div.innerHTML = resposta;
}