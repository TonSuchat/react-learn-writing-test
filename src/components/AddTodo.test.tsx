import configureMockStore from "redux-mock-store";
import { ReactWrapper, mount } from "enzyme";
import { initialState } from "../fixture/initialState";
import React from "react";
import { Provider } from "react-redux";
import ConnectedAddTodo, { mapDispatchToProps, AddTodo } from "./AddTodo";
import { ITodo } from "../models/todo";
import { addTodo } from "../actions/index";

describe("<AddTodo />", () => {
  const mockStore = configureMockStore();
  let store;
  let wrapper: ReactWrapper;
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <ConnectedAddTodo />
      </Provider>
    );
  });

  it("should render properly", () => {
    expect(wrapper.find("h3").text()).toEqual("Add new Todo");
    expect(wrapper.find("label").text()).toEqual("Detail");
    expect(wrapper.find("input[type='text']").length).toEqual(1);
    expect(wrapper.find("input[type='button']").length).toEqual(1);
  });

  it("should do logic properly when click add button", () => {
    const component = wrapper.find(AddTodo);
    component.setState({ text: "new todo" });
    component.find("#btnAdd").simulate("click");
    expect(component.state("text")).toEqual("");
  });

  describe("MapDispatchToProps", () => {
    describe("addTodo", () => {
      it("should be injected", () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.addTodo).toBeDefined();
      });

      it("should dispatch addTodo when called", () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const newTodo: ITodo = { id: "1", text: "test todo", completed: false };
        result.addTodo(newTodo);
        expect(dispatch).toHaveBeenCalledWith(addTodo(newTodo));
      });
    });
  });
});
