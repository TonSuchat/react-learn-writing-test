import ConnectedFooter, { Footer } from "./Footer";
import { shallow, ShallowWrapper, mount, ReactWrapper } from "enzyme";
import configureMockStore from "redux-mock-store";
import React from "react";
import { visibilityFilters } from "../actions/visibilityFilterTypes";
import { Provider } from "react-redux";

describe("<Footer />", () => {
  const mockStore = configureMockStore();
  let store;
  let connectedRenderedComponent: ShallowWrapper;
  let renderedComponent: ShallowWrapper;
  beforeEach(() => {
    store = mockStore({
      todos: [],
      visibilityFilter: visibilityFilters.SHOW_ALL
    });
    connectedRenderedComponent = shallow(
      <Provider store={store}>
        <ConnectedFooter />
      </Provider>
    );
    renderedComponent = shallow(
      <Footer
        setVisibilityFilter={() => null}
        visibilityFilter={visibilityFilters.SHOW_ALL}
      />
    );
  });

  it("should render 3 filter buttons with correct default class", () => {
    expect(renderedComponent.find("input[type='button']").length).toBe(3);
    expect(
      renderedComponent.find("#btnShowAll").hasClass("btn btn-primary")
    ).toBe(true);
  });
});
