import reducer from "./visibilityFilter";
import { visibilityFilters } from "../actions/visibilityFilterTypes";
import { SET_VISIBILITY_FILTER } from "../actions/actionTypes";

describe("visibilityFilter reducer", () => {
  it("should return the initial state", () => {
    const expectedState = visibilityFilters.SHOW_ALL;
    expect(reducer(undefined, {})).toEqual(expectedState);
  });

  it("should handle set visibility filter", () => {
    const fixture = visibilityFilters.SHOW_ACTIVE;
    const expectedState = fixture;
    const action = { filter: fixture, type: SET_VISIBILITY_FILTER };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
