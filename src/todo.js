import React from 'react';

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  const handleDeleteTask = (taskId) => {
    onDeleteTask(taskId);
    window.alert('Congractulatins, item from todo list  deleted successfully!');
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input
            type="radio"
            checked={task.completed}
            onChange={() => onChangeTask(task.id)}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;