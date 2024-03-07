
import React from 'react';

interface TodoProps {
  todo: {
    id: string;
    title: string;
    completed: boolean;
  };
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} />
      <span>{todo.title}</span>
    </div>
  );
};

export default Todo;
