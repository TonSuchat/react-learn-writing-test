import reducer from "./todos";
import { ITodo } from "../models/todo";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/actionTypes";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle ADD_TODO", () => {
    const newTodo: ITodo = { id: "1", text: "new todo", completed: false };
    const expectedState = [newTodo];
    const action = { type: ADD_TODO, newTodo };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it("should handle REMOVE_TODO", () => {
    const state: ITodo[] = [
      { id: "1", text: "new todo", completed: false },
      { id: "2", text: "new todo 2", completed: true }
    ];
    const expectedState = [{ id: "2", text: "new todo 2", completed: true }];
    const action = { type: REMOVE_TODO, id: "1" };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should handle TOGGLE_TODO", () => {
    const state: ITodo[] = [
      { id: "1", text: "new todo", completed: false },
      { id: "2", text: "new todo 2", completed: true }
    ];
    const expectedState = [
      { id: "1", text: "new todo", completed: true },
      { id: "2", text: "new todo 2", completed: true }
    ];
    const action = { type: TOGGLE_TODO, id: "1" };
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
