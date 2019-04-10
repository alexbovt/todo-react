import React, { Component } from "react";

import "./TodoListItem.css";

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      done,
      important,
      onItemDeleted,
      onItemDone,
      onItemImportant
    } = this.props;

    let classNames = "todo-list-item";

    if (done) classNames += " done";

    if (important) classNames += " important";

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onItemDone}>
          {label}
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onItemImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onItemDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
