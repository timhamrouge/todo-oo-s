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
    console.log('called')
    e.preventDefault();
    let { todos, newTodoName } = this.state;
    console.log(todos.list);
    todos.addTodo(new Todo(newTodoName));
    this.setState({ todos })
  };

  handleNameField = (e) => {
    console.log(e.target.value)
    this.setState({ newTodoName: e.target.value })
  }

  deleteTodo = (name) => {
    let { todos } = this.state;
    todos = todos.filter(todo => {
      return todo !== name;
    });
    this.setState({ todos })
  }

  moveUp = (name) => {
    let { todos } = this.state;
    const index = todos.indexOf(name);
    console.log(index)
  }

  moveDown = (name) => {
    let { todos } = this.state;
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
  deleteTodo={this.deleteTodo}
/>
      </div>
    );
  }


}


export default hot(module)(App);