
const background = document.getElementsByTagName('body')[0];
const spans = document.getElementsByTagName('span');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
     let dateToday = new Date ();
     let hr = dateToday.getHours();
     let min = dateToday.getMinutes();
     let sec = dateToday.getSeconds();

     /* Pegando os dados de horas, minutos e segundos do dia de hoje e
     atribuindo as variaveis criadas */

     if (hr < 10) hr = '0'+hr;
     if (min < 10) min = '0'+min;
     if (sec < 10) sec = '0'+sec;

     if (hr >= 6 && hr < 12) {
          background.style.background = "linear-gradient(90deg, green, white, green)"
          for (let i = 0; i < spans.length; i++) {
               spans[i].style.color = "#00FF00";
           }
     }
     if (hr >= 12 && hr < 18) {
          background.style.background = "linear-gradient(90deg, red, orange, red)"
          for (let i = 0; i < spans.length; i++) {
               spans[i].style.color = "#0000FF";
           }
     }
     if (hr >= 18 && hr < 24) {
          background.style.background = "linear-gradient(90deg, black, gray, black)";
          for (let i = 0; i < spans.length; i++) {
               spans[i].style.color = "#fff";
           }
     }
     if (hr >= 0 && hr < 6) {
          background.style.backgroundColor = "#000";
          for (let i = 0; i < spans.length; i++) {
               spans[i].style.color = "#fff";
           }
     }
     horas.innerHTML = hr;
     minutos.innerHTML = min;
     segundos.innerHTML = sec;
})