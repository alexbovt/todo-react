import React, { Component } from "react";

import "./TodoListForm.css";

export default class TodoListForm extends Component {
  state = {
    label: ""
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.label.trim()) {
      this.props.onItemAdded(this.state.label);
      this.setState({
        label: ""
      });
    } else console.log("Empty");
  };

  render() {
    return (
      <form className="todo-list-form d-flex" onSubmit={this.onSubmit}>
        <input
          className="form-control"
          type="text"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary">Add Todo Item</button>
      </form>
    );
  }
}
