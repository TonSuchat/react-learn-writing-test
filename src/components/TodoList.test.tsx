import { shallow, ShallowWrapper } from "enzyme";
import TodoList from "./TodoList";
import Todo from "./Todo";
import { ITodo } from "../models/todo";
import React from "react";

describe("<TodoList />", () => {
  let wrapper: ShallowWrapper;
  const todos: ITodo[] = [1, 2, 3].map(item => {
    return {
      id: item.toString(),
      text: `todo ${item}`,
      completed: true
    } as ITodo;
  });
  beforeEach(() => {
    wrapper = shallow(<TodoList todos={todos} />);
  });

  it("should render properly", () => {
    expect(wrapper.find("h3").text()).toEqual("Todo List");
    expect(wrapper.find(Todo).length).toBe(3);
  });
});
