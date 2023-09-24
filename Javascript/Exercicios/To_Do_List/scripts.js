const btnAdicionar = document.getElementById('adicionar');
const valorTarefa = document.getElementById('texto-input');
let listaTarefas = document.querySelector('ul');
let arrayTarefas = [];
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
// Função para criar uma tarefa
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
    cadastradasAtualmente++; // Incrementar o contador de tarefas cadastradas
    atualizarEstatisticas();
}
// Função para atualizar as estatísticas exibidas
function atualizarEstatisticas() {
    const estatisticas = document.getElementById('estatisticas');
    estatisticas.innerHTML = 
    `<li>Tarefas cadastradas: ${cadastradasAtualmente}</li>
    <li>Tarefas concluídas: ${concluidas}</li>
    <li>Tarefas excluídas: ${apagadas}</li>`;
    return estatisticas;
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
listaTarefas.addEventListener('click', (elemento) => {
    let itemClicado = elemento.target;

    if (itemClicado.classList.contains('excluir')) {
        const modalApagar = document.querySelector('#modal');
        modalApagar.classList.remove('esconder');

        const btnConfirma = document.querySelector('.confirma');
        btnConfirma.addEventListener('click', () => {
            alert('Confirmado com sucesso!');
            modalApagar.classList.add('esconder');

            const textoTarefa = itemClicado.parentElement.parentElement.textContent.trim();
            const index = arrayTarefas.indexOf(textoTarefa);
            if (index !== -1) {
                arrayTarefas.splice(index, 1);
                apagadas++;
                atualizarEstatisticas();
            }
            itemClicado.parentElement.parentElement.parentElement.remove();
            salvarLocalStorage();
        });
        const btnCancela = document.querySelector('.cancela');
        btnCancela.addEventListener('click', () => {
            modalApagar.classList.add('esconder');
        });
    }
    if (itemClicado.classList.contains('concluir')) {
        itemClicado.parentElement.parentElement.classList.toggle('concluido');
        concluidas++; 
        atualizarEstatisticas();
        salvarLocalStorage();
    }
});
carregarLocalStorage();
