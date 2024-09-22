import React, { useState } from "react";
import Task from "./Task";
import "./index.css";

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  // Adiciona uma nova tarefa
  const addTask = () => {
    if (taskName.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, name: taskName }]);
      setTaskName("");
    }
  };

  // Remove uma tarefa
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1>Gerenciador de Tarefas</h1>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={addTask}>Adicionar Tarefa</button>

      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onRemove={removeTask} />
        ))}
      </ul>
    </div>
  );
}

export default App;