import React, { Component } from "react";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import ItemStatusFilter from "../ItemStatusFilter";
import TodoListForm from "../TodoListForm";

import "./App.css";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Create React App"),
      this.createTodoItem("Have a lunch")
    ],
    term: "",
    filter: "all"
  };

  createTodoItem(label) {
    return {
      label: label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onItemDeleted = id => {
    this.setState(state => {
      const idx = state.todoData.findIndex(el => el.id === id);
      const newArray = [
        ...state.todoData.slice(0, idx),
        ...state.todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      };
    });
  };

  onItemAdded = text => {
    this.setState(state => {
      const newArray = [...state.todoData, this.createTodoItem(text)];

      return {
        todoData: newArray
      };
    });
  };

  onItemDone = id => {
    this.setState(state => {
      return {
        todoData: this.toggleProperty(state.todoData, id, "done")
      };
    });
  };

  onItemImportant = id => {
    this.setState(state => {
      return {
        todoData: this.toggleProperty(state.todoData, id, "important")
      };
    });
  };

  search = (data, term) => {
    if (term.length === 0) return data;
    return data.filter(e => {
      return e.label.toLowerCase().includes(term.toLowerCase());
    });
  };

  filter = (data, filter) => {
    switch (filter) {
      case "all":
        return data;
      case "active":
        return data.filter(e => !e.done);
      case "done":
        return data.filter(e => e.done);
      default:
        return data;
    }
  };

  onSearchChange = term => {
    this.setState({ term });
  };

  onFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);

    const doneCount = todoData.filter(el => el.done === true).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          todos={visibleItems}
          onItemDeleted={this.onItemDeleted}
          onItemAdded={this.onItemAdded}
          onItemDone={this.onItemDone}
          onItemImportant={this.onItemImportant}
        />
        <TodoListForm onItemAdded={this.onItemAdded} />
      </div>
    );
  }
}
