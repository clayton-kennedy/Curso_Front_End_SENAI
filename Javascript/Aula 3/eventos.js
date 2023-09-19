//  Para mudar o atributo de uma div pelo JS \/
const div = document.getElementById('quadrado')

div.addEventListener('mouseenter', preto)
div.addEventListener('mouseout', vermelho)
div.addEventListener('mousedown', clicou)
div.addEventListener('mouseup', desclicou)

    function preto() {
        div.style.backgroundColor = '#333';
        // div.style.borderRadius = '50%'
    }
    function vermelho() {
        div.style.backgroundColor = 'red';
    }
    function clicou(){
            // Para innerHTML utiliza-se crase
        div.innerHTML = 
            `   <ul>
                    <li> Item 1 </li>
                    <li> Item 2 </li>
                    <li> Item 3 </li>
                </ul>`
        }
    function desclicou(){
        div.innerText = '';
    }