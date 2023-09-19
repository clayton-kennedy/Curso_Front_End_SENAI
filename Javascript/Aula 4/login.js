
const login = document.getElementById('.emailLogin')
const senha = document.getElementById('.senhaLogin')
const enviar = document.getElementById('.entrar')

//é uma arrow function
enviar.addEventListener('click', (evento) => { 

    evento.preventDefault();
    //prever que atualize a página
    
    if (login.value == '') {
        alert('Login não pode ser vazio')
        login.classList = 'erro'
    }
    
    if (senha.value == '') {
        alert('Login não pode ser vazio')
        senha.classList = 'erro'
    }
})
