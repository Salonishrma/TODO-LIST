
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [
    { id: 1, text: 'Make Breakfast', completed: false },
    { id: 2, text: 'Watch Anime', completed: false },
    { id: 3, text: 'Do Coding', completed: false },
    { id: 4, text: 'Washing Cloths', completed: false },
    { id: 5, text: 'Take Nap', completed: false },
    { id: 6, text: 'Play Game', completed: true },
  ],
};

type TaskAction =
  | { type: 'addition'; payload: string }
  | { type: 'changing'; payload: number }
  | { type: 'deletion'; payload: string | number };

const taskReducer = (state: TaskState = initialState, action: TaskAction): TaskState => {
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
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case 'deletion':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export { initialState, taskReducer };
