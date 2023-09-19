
const menuhamburguer = document.querySelector('menu-hamburguer');

function mostrarMenu() {
    const nav = document.getElementById('menuTopo')
    nav.classList.toggle('ativar');
}
menuhamburguer.addEventListener('click', mostrarMenu);