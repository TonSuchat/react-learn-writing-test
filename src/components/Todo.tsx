import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import "./todo.css";

export class Todo extends Component<{
  id: string;
  text: string;
  completed: boolean;
  toggleTodo: (id: string) => void;
}> {
  onTodoClicked() {
    this.props.toggleTodo(this.props.id);
  }

  render() {
    return (
      <li
        className={this.props.completed ? "completed" : ""}
        onClick={() => this.onTodoClicked()}
      >
        {this.props.text}
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  toggleTodo: (id: string) => dispatch(toggleTodo(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Todo);
export { mapDispatchToProps };
