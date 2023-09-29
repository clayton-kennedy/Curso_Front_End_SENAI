
var modalUm = document.querySelector('#secModal');
const btnModal = document.querySelector('.naoClique');
const btnConfirma = document.querySelector('.confirma');
const btnCancela = document.querySelector('.cancela');

    btnModal.addEventListener('click', open)
    function open(){
        modalUm.classList.remove('esconder');
    }

    btnConfirma.addEventListener('click', confirmar)
    function confirmar(){
        alert('Confirmado com sucesso!');
        modalUm.classList.add('esconder');
    }
    
    btnCancela.addEventListener('click', cancelar)
    function cancelar(){
        modalUm.classList.add('esconder');
    }

