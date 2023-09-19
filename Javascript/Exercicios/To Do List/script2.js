// Obter referência ao botão de adicionar
const btnAdicionar = document.getElementById('adicionar');

// Obter referência ao input onde o usuário digita as tarefas
const valorTarefa = document.getElementById('texto-input');

// Obter referência à lista de tarefas (ul)
let listaTarefas = document.querySelector('ul');

// Criar um array para armazenar os textos das tarefas
var arrayTarefas = [];

// Adicionar um ouvinte de eventos ao botão de adicionar
btnAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault(); // Impedir o comportamento padrão do botão (evitar recarregar a página)

    // Verificar se o campo de entrada está vazio
    if (valorTarefa.value == '') {
        alert('O campo não pode ser vazio.');
    } else {
        // Obter o texto da tarefa do campo de entrada
        const tarefaTexto = valorTarefa.value;

        // Criar uma representação visual (elemento DOM) da tarefa
        const tarefa = criarTarefa(tarefaTexto);

        // Adicionar o texto da tarefa ao array de tarefas
        arrayTarefas.push(tarefaTexto);

        // Renderizar a tarefa na lista
        renderizarTarefa(tarefa);

        // Salvar as tarefas no Local Storage
        salvarLocalStorage();
    }

    // Limpar o campo de entrada após a captura da tarefa
    valorTarefa.value = '';
});

// Adicionar um ouvinte de eventos à lista de tarefas (ul)
listaTarefas.addEventListener('click', (elemento) => {
    // Capturar o elemento que foi clicado (pode ser um botão de excluir ou concluir)
    let itemClicado = elemento.target;

    // Verificar se o elemento clicado possui a classe 'excluir'
    if (itemClicado.classList.contains('excluir')) {
        // Obter o texto da tarefa a partir do elemento pai
        const textoTarefa = itemClicado.parentElement.parentElement.textContent.trim();

        // Encontrar o índice do texto da tarefa no array de tarefas
        const index = arrayTarefas.indexOf(textoTarefa);

        // Se o texto da tarefa for encontrado no array, removê-lo
        if (index !== -1) {
            arrayTarefas.splice(index, 1);
        }

        // Remover o elemento visual (li) da lista
        itemClicado.parentElement.parentElement.parentElement.remove();

        // Salvar as tarefas atualizadas no Local Storage
        salvarLocalStorage();
    }

    // Verificar se o elemento clicado possui a classe 'concluir'
    if (itemClicado.classList.contains('concluir')) {
        // Alternar a classe 'concluido' no elemento pai (li) para marcar como concluído
        itemClicado.parentElement.parentElement.classList.toggle('concluido');

        // Salvar as tarefas atualizadas no Local Storage
        salvarLocalStorage();
    }
});

// Função para criar uma representação visual (elemento DOM) de uma tarefa
function criarTarefa(valorTarefa) {
    const li = document.createElement('li'); // Criar um elemento <li> para a tarefa
    li.innerHTML = `
        <li>${valorTarefa}
            <div>
            <button class="excluir"></button>
            <button class="concluir"></button>
            </div>
        </li>`; // Definir o conteúdo HTML da <li> com os botões

    return li; // Retornar o elemento <li> criado
}

// Função para renderizar uma tarefa na lista
function renderizarTarefa(tarefa) {
    listaTarefas.appendChild(tarefa); // Adicionar o elemento <li> à lista (ul)
}

// Função para salvar as tarefas no Local Storage
function salvarLocalStorage() {
    localStorage.setItem('itensLocalStorage', JSON.stringify(arrayTarefas)); 
    // Converter o array de tarefas em JSON e armazenar no Local Storage
}

// Função para carregar as tarefas do Local Storage
function carregarLocalStorage() {
    // Obter as tarefas armazenadas no Local Storage
    const tarefasSalvas = JSON.parse(localStorage.getItem('itensLocalStorage'));

    // Se houver tarefas no Local Storage, atualizar o array de tarefas e renderizá-las
    if (tarefasSalvas) {
        arrayTarefas = tarefasSalvas;
        for (const textoTarefa of arrayTarefas) {
            // Criar uma representação visual (elemento DOM) para cada tarefa e renderizá-la
            const tarefa = criarTarefa(textoTarefa);
            renderizarTarefa(tarefa);
        }
    }
}

// Carregar as tarefas do Local Storage quando a página é carregada
carregarLocalStorage();
