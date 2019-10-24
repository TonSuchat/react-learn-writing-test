import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from "./actionTypes";
import { ITodo } from "../models/todo";

export const addTodo = (todo: ITodo) => {
  return { type: ADD_TODO, todo };
};

export const removeTodo = (id: string) => {
  return { type: REMOVE_TODO, id };
};

export const toggleTodo = (id: string) => {
  return { type: TOGGLE_TODO, id };
};

export const setVisibilityFilter = (filter: string) => {
  return { type: SET_VISIBILITY_FILTER, filter };
};
