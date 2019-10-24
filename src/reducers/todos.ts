import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/actionTypes";
import { ITodo } from "../models/todo";

const todos = (state: ITodo[] = [], action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.newTodo];
    case REMOVE_TODO:
      return [...state].filter((item: ITodo) => item.id !== action.id);
    case TOGGLE_TODO:
      const currentState = [...state];
      currentState.forEach(item => {
        if (item.id === action.id) item.completed = !item.completed;
      });
      return currentState;
    default:
      return state;
  }
};

export default todos;
