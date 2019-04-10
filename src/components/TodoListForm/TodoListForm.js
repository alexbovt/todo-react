import React, { Component } from "react";

import "./TodoListForm.css";

export default class TodoListForm extends Component {
  render() {
    const { onItemAdded } = this.props;

    return (
      <div className="todo-list-form d-flex">
        <input className="form-control" type="text" />
        <button
          className="btn btn-outline-secondary"
          onClick={() => onItemAdded("New Todo Item")}
        >
          Add Todo Item
        </button>
      </div>
    );
  }
}
