const btnAdicionar = document.getElementById('adicionar');
const valorTarefa = document.getElementById('texto-input');
let listaTarefas = document.querySelector('ul');
var arrayTarefas = [];
let foramCadastradas = 0;
let cadastradasAtualmente = 0;
let concluidas = 0;
let apagadas = 0;



btnAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();

    if (valorTarefa.value == '') {
        alert('O campo não pode ser vazio.');
    } else {
        const tarefaTexto = valorTarefa.value;
        const tarefa = criarTarefa(tarefaTexto);
        arrayTarefas.push(tarefaTexto);
        renderizarTarefa(tarefa);
        salvarLocalStorage();
    }

    valorTarefa.value = '';
});

listaTarefas.addEventListener('click', (elemento) => {

    let itemClicado = elemento.target;
    if (itemClicado.classList.contains('excluir')) {
// quando clicar para deletar, identifica pelo splice o item e o remove tb do 
// localstorage
        const textoTarefa = itemClicado.parentElement.parentElement.textContent.trim();
        const index = arrayTarefas.indexOf(textoTarefa);
        if (index !== -1) {
            arrayTarefas.splice(index, 1);
        }
        itemClicado.parentElement.parentElement.parentElement.remove();
        apagadas++;
        salvarLocalStorage();
    }
    if (itemClicado.classList.contains('concluir')) {
        itemClicado.parentElement.parentElement.classList.toggle('concluido');
        concluidas++
        salvarLocalStorage();
    }
});

function criarTarefa(valorTarefa) {
    const li = document.createElement('li'); 
    li.innerHTML = `
        <li>${valorTarefa}
            <div>
            <button class="excluir"></button>
            <button class="concluir"></button>
            </div>
        </li>`;

    return li; 
}
function renderizarTarefa(tarefa) {
    listaTarefas.appendChild(tarefa);
}

function salvarLocalStorage() {
    localStorage.setItem('itensLocalStorage', JSON.stringify(arrayTarefas)); 
}

function carregarLocalStorage() {
    const tarefasSalvas = JSON.parse(localStorage.getItem('itensLocalStorage'));

    if (tarefasSalvas) {
        arrayTarefas = tarefasSalvas;
        for (const textoTarefa of arrayTarefas) {
            const tarefa = criarTarefa(textoTarefa);
            renderizarTarefa(tarefa);
        }
    }
}

carregarLocalStorage();
