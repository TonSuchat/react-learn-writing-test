import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from "./actionTypes";
import * as actions from "./index";
import { ITodo } from "../models/todo";
import { visibilityFilters } from "./visibilityFilterTypes";

describe("actions", () => {
  it("should create an action to add todo", () => {
    const todo: ITodo = { id: "1", text: "", completed: false };
    const expectedAction = { todo, type: ADD_TODO };
    expect(actions.addTodo(todo)).toEqual(expectedAction);
  });

  it("should create an action to remove todo", () => {
    const id: string = "1";
    const expectedAction = { id, type: REMOVE_TODO };
    expect(actions.removeTodo(id)).toEqual(expectedAction);
  });

  it("should create an action to toggle todo", () => {
    const id: string = "1";
    const expectedAction = { id, type: TOGGLE_TODO };
    expect(actions.toggleTodo(id)).toEqual(expectedAction);
  });

  it("should create an action to set visibility filter", () => {
    const filter: string = visibilityFilters.SHOW_COMPLETED;
    const expectedAction = { filter, type: SET_VISIBILITY_FILTER };
    expect(actions.setVisibilityFilter(filter)).toEqual(expectedAction);
  });
});
