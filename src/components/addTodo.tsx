import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { ITodo } from "../models/todo";
import { generateRandom } from "../utility/helpers";

export class AddTodo extends Component<
  {
    addTodo: (todo: ITodo) => void;
  },
  {
    text: string;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      text: ""
    };
  }

  onAddClicked() {
    const newTodo: ITodo = {
      id: generateRandom(),
      text: this.state.text,
      completed: false
    };
    this.props.addTodo(newTodo);
    this.setState({ text: "" });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <h3>Add new Todo</h3>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="detail">Detail</label>
          <input
            id="txtDetail"
            type="text"
            className="form-control"
            value={this.state.text}
            onChange={e => this.setState({ text: e.target.value })}
          />
        </div>
        <input
          id="btnAdd"
          type="button"
          className="btn btn-primary"
          value="Add"
          onClick={() => this.onAddClicked()}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (todo: ITodo) => dispatch(addTodo(todo))
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);

export { mapDispatchToProps };
