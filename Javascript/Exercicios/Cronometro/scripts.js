let segundos = 0;
let minutos = 0;
let horas = 0;
let interval;
const cronometroHTML = document.querySelector('#tempo');
const botaoPlay = document.querySelector('.play');
const botaoPause = document.querySelector('.pause');
const botaoStop = document.querySelector('.stop');

function iniciar (){
     botaoPause.disabled = false;
     botaoPlay.disabled = true;
     cronometro();
     interval = setInterval(cronometro, 1000);
     }
const pausar = () => {
     botaoPause.disabled = true;
     botaoPlay.disabled = false;
     clearInterval(interval);
}
const parar = () => {
     botaoPause.disabled = true;
     botaoPlay.disabled = false;
     clearInterval(interval);
     segundos = 0;
     minutos = 0;
     horas = 0;
     cronometroHTML.innerHTML = "00:00:00";
}
const digitoZero = (digito) => {
     if (digito < 10) {
          return `0${digito}`;
     } else {
          return digito
     }
}
function cronometro (){
     segundos++;

     if (segundos === 60) {
          minutos++;
          segundos = 0;
     }
     if (minutos === 60) {
          horas++;
          minutos = 0;
     }
     if (horas === 24) {
          segundos = 0;
          minutos = 0;
          horas = 0;
     }
     cronometroHTML.innerHTML = digitoZero(horas)+":"+digitoZero(minutos)+":"+digitoZero(segundos);
}
