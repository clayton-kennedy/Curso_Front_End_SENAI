const informacoes = document.querySelector('.informacoes');
const btnEnviar = document.querySelector('#enviar');
const cep = document.querySelector('#cep');

btnEnviar.addEventListener('click',(evento) => {
    evento.preventDefault();
    console.log(cep.value);
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
//.then() é o mesmo que dizer: ao receber a requisiçaoentão faça algo
    .then(respostaRecebida => respostaRecebida.json())
//AQUI ESTAMOS FALANDO PARA ARMAZENAR A RESPOSTA (PROMISE) NA VARIAVEL resposta E CONVERTER PAR JSON.
    .then(dadosConvertidos => { console.log(dadosConvertidos)})
    cep.value = ''
});
