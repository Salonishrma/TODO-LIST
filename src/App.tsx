import React, { useReducer, useEffect } from 'react';
import TaskList from './TaskList';
import { initialState, taskReducer } from './taskReducer';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
  }, []);

  const handleAddition = (text: string) => {
    dispatch({ type: 'addition', payload: text });
  };

  const handleChanging = (id: number) => {
    dispatch({ type: 'changing', payload: id });
  };

  const handleDeletion = (id: number) => {
    dispatch({ type: 'deletion', payload: id });
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <TaskList
        tasks={state.tasks}
        onChangeTask={handleChanging}
        onDeleteTask={handleDeletion}
      />
      <input
        type="text"
        placeholder="Add a new task"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.currentTarget.value.trim()) {
            handleAddition(e.currentTarget.value.trim());
            e.currentTarget.value = '';
          }
        }}
      />
    </div>
  );
};

export default App;
