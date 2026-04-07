const inputTarefa = document.getElementById('inputTarefa');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefas = document.getElementById('listaTarefas');

function adicionarTarefa() {
    const texto = inputTarefa.value;

    if (texto.trim() === "") {
        alert("Digite algo!");
        return;
    }

   
    const novaLi = document.createElement('li');
    novaLi.textContent = texto;

    
    listaTarefas.appendChild(novaLi);


    inputTarefa.value = "";
    inputTarefa.focus();
}

btnAdicionar.addEventListener('click', adicionarTarefa);


listaTarefas.addEventListener('click', function(evento) {
    if (evento.target.tagName === 'LI') {
        evento.target.remove(); 
    }
});