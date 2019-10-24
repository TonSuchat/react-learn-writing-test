import React, { Component } from "react";
import { ITodo } from "../models/todo";
import Todo from "./Todo";

export default class TodoList extends Component<{
  todos: ITodo[];
}> {
  render() {
    return (
      <div>
        <h3>Todo List</h3>
        <ul>
          {this.props.todos.map(item => {
            return <Todo key={item.id} {...item} />;
          })}
        </ul>
      </div>
    );
  }
}
