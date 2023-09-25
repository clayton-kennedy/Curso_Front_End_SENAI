
const KEY_OPENAI = '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';
let mensagem = 'Quais são as girias de belo horizonte?';

fetch('https://api.openai.com/v1/completions', {
    //no objeto iremos fazer as configurações do chatgpt
    method:'POST', //para deixar um pouco mais seguro
    headers: { // configurar o cabeçalho
        Accept: "application/json", // para aceitar resposta json
        "Content-type": "application/json", // o conteudo que irei enviar tbm será json
        Authorization: `Bearer ${KEY_OPENAI}`
    },
    body: JSON.stringify({
        //Configurações do corpo convertida em string
        model: "text-davinci-003",
        prompt: mensagem, //texto da pergunta pro chatgpt
        max_tokens: 2048, //qtd máxima de caracteres enviadas em uma mensagem
        temperature: 0.5 //a precisão das respostas
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(errooouuuu => {
    console.log(errooouuuu);
})
/* =================================== FETCH =================================== */

