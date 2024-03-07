// todoReducer.ts
import { createStore, Reducer } from 'redux';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

enum TodoActionTypes {
  ADD_TODO = "ADD_TODO",
  UPDATE_TODO = "UPDATE_TODO",
  DELETE_TODO = "DELETE_TODO",
}

interface AddTodoAction {
  type: TodoActionTypes.ADD_TODO;
  payload: Todo;
}

interface UpdateTodoAction {
  type: TodoActionTypes.UPDATE_TODO;
  payload: Todo;
}

interface DeleteTodoAction {
  type: TodoActionTypes.DELETE_TODO;
  payload: string;
}

type TodoAction = AddTodoAction | UpdateTodoAction | DeleteTodoAction;

const todoReducer: Reducer<Todo[], TodoAction> = (state = [], action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return [...state, action.payload];
    case TodoActionTypes.UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      );
    case TodoActionTypes.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(todoReducer);

export default store;
