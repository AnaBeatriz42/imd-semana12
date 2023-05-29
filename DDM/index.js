import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';


function App() {
  const [tarefa, setTarefa] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tarefaCount, setTarefaCount] = useState(0);

  useEffect(() => {
    document.title = `Lista de Tarefas (${tarefaCount})`;
  }, [tarefaCount]);

  const handleInputChange = (event) => {
    setNovaTarefa(event.target.value);
  };

  const handleAddTarefa = () => {
    if (novaTarefa.trim() !== '') {
      const addTarefa = {
        id: Date.now(),
        title: novaTarefa
      };
      setTarefa((prevTarefa) => [...prevTarefa, addTarefa]);
      setNovaTarefa('');
      setTarefaCount((addCount) => addCount + 1);
    }
  };

  const handleRemoveTarefa = (tarefaId) => {
    setTarefa((prevTarefas) => prevTarefas.filter((event) => event.id !== tarefaId));
    setTarefaCount((remCount) => remCount - 1);
  };

  return (
    <div>
      <h1>Tarefas</h1>
      <input type="text" value={novaTarefa} onChange={handleInputChange} />
      <button onClick={handleAddTarefa}>Adicionar</button>
      <ul>
        {tarefa.map((event) => (
          <li key={event.id}>
            <input type="checkbox" onChange={() => handleRemoveTarefa(event.id)} />
            {event.title}
          </li>
        ))}
      </ul>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);