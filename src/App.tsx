import React, { useReducer } from 'react';
import TaskList from './todo';

const initialState = {
  tasks: [
    { id: 1, text: 'Make Breakfast', completed: false },
    { id: 2, text: 'Watch Anime', completed: false },
    { id: 3, text: 'Do Coding', completed: false },
    { id: 4, text: 'Washing Cloths', completed: false },
    { id: 5, text: 'Take Nap', completed: false },
    { id: 6, text: 'Play Game', completed: true },
  ],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'addition':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };
    case 'changing':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case 'deletion':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const handleAddition= text => {
    dispatch({ type: 'addition', payload: text });
  };

  const handleChanging = id => {
    dispatch({ type: 'changing', payload: id });
  };

  const handleDeletion= id => {
    dispatch({ type: 'deletion', payload: id });
  };

  return (
    <div>
      <h2>To Do List</h2>
      <TaskList
        tasks={state.tasks}
        onChangeTask={handleChanging}
        onDeleteTask={handleDeletion}
      />
      <input
        type="text"
        placeholder="Add a new task"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim()) {
            handleAddition(e.target.value.trim());
            e.target.value = '';
          }
        }}
      />
    </div>
  );
};

export default App;
