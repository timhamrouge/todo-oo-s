import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import ToDoList from "./components/ToDoList";


class TodoList {
  constructor() {
    this.list = [];
  }

  addTodo(todo) {
    this.list.push(todo)
  }

  removeTodo(name) {
    this.list = this.list.filter(task => task.name !== name)
  }

  flipFlag(name) {
    for (let i in this.list) {
      if (this.list[i].name === name) {
        this.list[i].toggleComplete()
      }
    }
  }

  reposition(name, x, y) {
    let item = this.list[x];
    let editedArray = this.list.filter(item => item.name != name);
    this.list = editedArray.slice(0, y).concat(item).concat(editedArray.slice(y))
  }

  changeUrgency(name, i, urgency) {
    this.list[i].updateUrgency(urgency)
  }

}

class Todo {
  constructor(name, urgency, today, dueDate) {
    this.name = name;
    this.done = false;
    this.urgency = urgency || 1;
    this.today = today || false;
    this.dueDate = dueDate || '';
  }

  toggleComplete() {
    this.done = !this.done;
  }

  updateUrgency(urgency) {
    this.urgency = urgency;
  }
}

class App extends Component {
  state = {
    todos: new TodoList,
    newTodoName: '',
    newTodoUrgency: '',
    newTodoForToday: false,
    newTodoDueDate: ''
  }

  addTodo = (e) => {
    e.preventDefault();
    let { todos, newTodoName, newTodoUrgency, newTodoForToday, newTodoDueDate } = this.state;

    todos.addTodo(new Todo(newTodoName, (newTodoUrgency != "1" ? +newTodoUrgency : 1), newTodoForToday, newTodoDueDate));
    this.setState({ todos })
  };

  handleNameField = (e) => {
    this.setState({ newTodoName: e.target.value })
  }
  
  handleUrgencyField = (e) => {
    this.setState({ newTodoUrgency: e.target.value })
  }

  deleteTodo = (name) => {
    let { todos } = this.state;
    todos.removeTodo(name);
    this.setState({ todos })
  }

  toggleTodoComplete = (name) => {
    let { todos } = this.state;
    todos.flipFlag(name);
    this.setState({ todos });
  }

  moveUp = (name, index, shift) => {
    let { todos } = this.state;
    todos.reposition(name, index, shift);
    this.setState({ todos });
  }

  moveDown = (name) => {
    let { todos } = this.state;
    todos.reposition(name, index, shift);
    this.setState({ todos });
  }

  handleDueToday = () => {
    const newTodoForToday = !this.state.newTodoForToday
    this.setState({newTodoForToday}) 
  }

  handleDueDate = (e) => {
    console.log(e.target.value)
    let newTodoDueDate = e.target.value;
    this.setState({newTodoDueDate});
  }

  render() {
    const { todos, newTodoName, newTodoUrgency, newTodoForToday, newTodoDueDate } = this.state;
    console.log(this.state);
    return (
      <div className="App">

        <form>
          <label htmlFor="add-todo">Task:</label><br />
          <input type="text" id="fname" name="add-todo"
            value={newTodoName}
            onChange={(e) => this.handleNameField(e)}
          >
          </input>
          <br />
          <label htmlFor="due-date">Due Date:</label>

          <input type="date" value={newTodoDueDate} onChange={(e) => this.handleDueDate(e)}/>

          <label htmlFor="today">Due Today?</label>

          <input type="checkbox" value={newTodoForToday} onClick={() => this.handleDueToday()}/>



          <label htmlFor="urgency">urgency</label>

          <select name="urgency" id="urgency" value={newTodoUrgency} onChange={(e) => this.handleUrgencyField(e)}>
            <option id="1" value="1">1</option>
            <option id="2" value="2">2</option>
            <option id="3"value="3">3</option>
            <option id="4"value="4">4</option>
            <option id="5" value="5">5</option>
          </select>
          <br />
          <input
            onClick={(e) => this.addTodo(e)}
            type="submit" value="Submit">
          </input>
        </form>

        <ToDoList
          title='ALL TODOS'
          todos={todos.list}
          moveUp={this.moveUp}
          moveDown={this.moveDown}
          deleteTodo={this.deleteTodo}
          toggleTodoComplete={this.toggleTodoComplete}
        />

        <ToDoList
          title='TODAY'
          todos={todos.list.filter(todo => {
            return todo.today
          })}
          moveUp={this.moveUp}
          moveDown={this.moveDown}
          deleteTodo={this.deleteTodo}
          toggleTodoComplete={this.toggleTodoComplete}
        />
      </div>
    );
  }


}


export default hot(module)(App);