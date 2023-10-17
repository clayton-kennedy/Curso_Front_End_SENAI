

function logar (){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin@admin.br" && senha == "admin"){
        location.href = "login.html";}

    else {
        alert('Usuário ou senha inválidos.')
        location.href = "login.html";}    
    }

function forgotpass (){
    var recuperar = document.getElementById('email-forgot-pass').value;

    if(email-forgot-pass == "admin@admin.br"){
        alert ('Verifique seu e-mail')
        location.href= "login.html";}
        else {
            alert ('E-mail não cadastrado.')
        location.href = "forgot-pass.html";}
}