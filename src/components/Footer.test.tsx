import ConnectedFooter, { Footer, mapDispatchToProps } from "./Footer";
import { mount, ReactWrapper } from "enzyme";
import configureMockStore from "redux-mock-store";
import React from "react";
import { visibilityFilters } from "../actions/visibilityFilterTypes";
import { Provider } from "react-redux";
import { setVisibilityFilter } from "../actions";

describe("<Footer />", () => {
  const mockStore = configureMockStore();
  let store;
  let wrapper: ReactWrapper;
  const initialState = {
    todos: [],
    visibilityFilter: visibilityFilters.SHOW_ALL
  };
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <ConnectedFooter />
      </Provider>
    );
  });

  it("should render 3 filter buttons with correct default class", () => {
    expect(wrapper.find("input[type='button']").length).toBe(3);
    expect(wrapper.find("#btnShowAll").hasClass("btn btn-primary")).toBe(true);
  });

  describe("mapStateToProps", () => {
    describe("visibilityFilter", () => {
      it("should get initial props", () => {
        expect(wrapper.find(Footer).prop("visibilityFilter")).toEqual(
          initialState.visibilityFilter
        );
      });
    });
  });

  describe("mapDispatchToProps", () => {
    describe("setVisibilityFilter", () => {
      it("should be injected", () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.setVisibilityFilter).toBeDefined();
      });
    });

    it("should dispatch setVisibilityFilter when called", () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const filter = visibilityFilters.SHOW_COMPLETED;
      result.setVisibilityFilter(filter);
      expect(dispatch).toHaveBeenCalledWith(setVisibilityFilter(filter));
    });
  });
});
