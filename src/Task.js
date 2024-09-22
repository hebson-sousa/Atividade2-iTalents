import React from "react";

function Task({ task, onRemove }) {
  return (
    <li>
      {task.name}
      <button onClick={() => onRemove(task.id)}>Remover</button>
    </li>
  );
}

export default Task;