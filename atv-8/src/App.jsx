import { useState } from 'react'
import './App.css'

function App() {
  
  const [tarefas, setTarefas] = useState([]);
  
  
  const [textoInput, setTextoInput] = useState('');

  
  const adicionarTarefa = (e) => {
    e.preventDefault();
    if (textoInput.trim() === '') return;

    const novaTarefa = {
      id: Date.now(), 
      text: textoInput
    };

    
    setTarefas([...tarefas, novaTarefa]);
    setTextoInput(''); 
  };

  
  const removerTarefa = (id) => {
    
    const listaAtualizada = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(listaAtualizada);
  };

  return (
    <div className="app-container">
      <h1>Minhas Tarefas</h1>
      
      <form onSubmit={adicionarTarefa} className="input-box">
        <input 
          type="text" 
          placeholder="O que vamos fazer hoje?"
          value={textoInput}
          onChange={(e) => setTextoInput(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="todo-list">
        {tarefas.map(tarefa => (
          <li key={tarefa.id} className="todo-item">
            <span>{tarefa.text}</span>
            <button onClick={() => removerTarefa(tarefa.id)} className="btn-remove">
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App