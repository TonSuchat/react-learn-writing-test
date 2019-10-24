import React, { Component } from "react";
import { connect } from "react-redux";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import { ITodo } from "./models/todo";
import { visibilityFilters } from "./actions/visibilityFilterTypes";

class App extends Component<
  {
    todos?: ITodo[];
    visibilityFilter?: string;
  },
  {}
> {
  getTodosByFilter() {
    const { todos, visibilityFilter } = this.props;
    switch (visibilityFilter) {
      case visibilityFilters.SHOW_ALL:
        return [...todos];
      case visibilityFilters.SHOW_COMPLETED:
        return todos ? todos.filter(item => item.completed) : [];
      case visibilityFilters.SHOW_ACTIVE:
        return todos ? todos.filter(item => !item.completed) : [];
      default:
        return [];
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6 ">
            <TodoList todos={this.getTodosByFilter()} />
            <Footer />
          </div>
          <div className="col-md-6">
            <AddTodo />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter
});

export default connect(
  mapStateToProps,
  null
)(App);
