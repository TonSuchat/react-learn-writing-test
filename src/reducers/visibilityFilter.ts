import { SET_VISIBILITY_FILTER } from "../actions/actionTypes";
import { visibilityFilters } from "../actions/visibilityFilterTypes";

const visibilityFilter = (state = visibilityFilters.SHOW_ALL, action: any) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
