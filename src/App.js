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
  constructor(name, urgency) {
      this.name = name;
      this.done = false;
      this.urgency = urgency || 1
  }

  toggleComplete() {
      this.done = !this.done;
  }

  updateUrgency (urgency) {
      this.urgency = urgency;
  }
}


// function App() {

//   const [todoList, setTodoList] = useState(new TodoList);

//   console.log(todoList)


// }



class App extends Component {
  state = {
    todos: new TodoList,
    newTodoName: ''
  }

  addTodo = (e) => {
    e.preventDefault();
    let { todos, newTodoName } = this.state;
    todos.addTodo(new Todo(newTodoName));
    this.setState({ todos })
  };

  handleNameField = (e) => {
    this.setState({ newTodoName: e.target.value })
  }

  deleteTodo = (name) => {
    let { todos } = this.state;
    todos.removeTodo(name);
    this.setState({ todos })
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

  render() {
    const { todos, newTodoName } = this.state;
    return (
      <div className="App">

        <form>
          <label htmlFor="add-todo">First name:</label><br />
          <input type="text" id="fname" name="add-todo"
          value={newTodoName} 
          onChange={(e) => this.handleNameField(e)}
          >
          </input>
          <br />
          <input
            onClick={ (e) => this.addTodo(e) } 
            type="submit" value="Submit">
          </input>
        </form>

        <ToDoList
  todos={todos.list}
  moveUp={this.moveUp}
  moveDown={this.moveDown}
  deleteTodo={this.deleteTodo}
/>
      </div>
    );
  }


}


export default hot(module)(App);