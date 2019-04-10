import React from "react";
import TodoListItem from "../TodoListItem";

import "./TodoList.css";

const TodoList = ({ todos, onItemDeleted, onItemDone, onItemImportant }) => {
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onItemDeleted={() => onItemDeleted(id)}
          onItemDone={() => onItemDone(id)}
          onItemImportant={() => onItemImportant(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
