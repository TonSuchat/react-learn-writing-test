import React, { Component } from "react";
import { visibilityFilters } from "../actions/visibilityFilterTypes";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";

class Footer extends Component<{
  setVisibilityFilter: (filter: string) => void;
  visibilityFilter?: string;
}> {
  onFilterClicked(filter: string) {
    this.props.setVisibilityFilter(filter);
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="btn-group btn-block">
            <input
              type="button"
              className={
                this.props.visibilityFilter === visibilityFilters.SHOW_ALL
                  ? "btn btn-primary"
                  : "btn btn-secondary"
              }
              value="All"
              onClick={() => this.onFilterClicked(visibilityFilters.SHOW_ALL)}
            />
            <input
              type="button"
              className={
                this.props.visibilityFilter === visibilityFilters.SHOW_COMPLETED
                  ? "btn btn-primary"
                  : "btn btn-secondary"
              }
              value="Completed"
              onClick={() =>
                this.onFilterClicked(visibilityFilters.SHOW_COMPLETED)
              }
            />
            <input
              type="button"
              className={
                this.props.visibilityFilter === visibilityFilters.SHOW_ACTIVE
                  ? "btn btn-primary"
                  : "btn btn-secondary"
              }
              value="Active"
              onClick={() =>
                this.onFilterClicked(visibilityFilters.SHOW_ACTIVE)
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch: any) => ({
  setVisibilityFilter: (filter: string) => dispatch(setVisibilityFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
