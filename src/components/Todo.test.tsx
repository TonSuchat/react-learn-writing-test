import { ReactWrapper, mount } from "enzyme";
import { initialState } from "../fixture/initialState";
import configureMockStore from "redux-mock-store";
import React from "react";
import { Provider } from "react-redux";
import ConnectedTodo, { Todo, mapDispatchToProps } from "./Todo";
import { toggleTodo } from "../actions";

describe("<Todo />", () => {
  const mockStore = configureMockStore();
  let store;
  let wrapper: ReactWrapper;
  const initialProps = { id: "1", text: "todo", completed: true };
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <ConnectedTodo {...initialProps} />
      </Provider>
    );
  });

  it("should render todo item properly", () => {
    const component = wrapper.find(Todo);
    expect(component.find("li").length).toBe(1);
    expect(component.find("li").text()).toEqual("todo");
    expect(component.find("li").hasClass("completed")).toBe(true);
  });

  describe("mapDispatchToProps", () => {
    describe("toggleTodo", () => {
      it("should be injected", () => {
        const dispath = jest.fn();
        const result = mapDispatchToProps(dispath);
        expect(result.toggleTodo).toBeDefined();
      });

      it("should dispatch toggleTodo when called", () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const fixture = "1";
        result.toggleTodo(fixture);
        expect(dispatch).toHaveBeenCalledWith(toggleTodo(fixture));
      });
    });
  });
});
