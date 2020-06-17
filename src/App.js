import React, { Component } from "react";
import ToDoList from "./components/ToDoList"
import { hot } from "react-hot-loader";
import "./App.css";


class App extends Component {
  state = {
    todos: ['1', '2', '3'],
    newTodoName: ''
  }

  addTodo = (e) => {
    console.log('called')
    e.preventDefault();
    console.log(this.state.todos)
    let { todos, newTodoName } = this.state;
    todos.push(newTodoName);
    // const todos = this.state.todos.push(this.state.newTodoName);
    this.setState({todos})
  };

  handleNameField = (e) => {
    console.log(e.target.value)
    this.setState({ newTodoName: e.target.value })
  }

  render() {
    const { todos, newTodoName } = this.state;
    // console.log(this.state)
    return (
      <div className="App">

        <form>
          <label htmlFor="add-todo">First name:</label><br/>
            <input type="text" id="fname" name="add-todo" value={newTodoName} onChange={(e) => this.handleNameField(e)}>
              </input>
            <br/>
                  <input onClick={ (e) => this.addTodo(e) } type="submit" value="Submit">
                    </input>
          </form>

                  <ToDoList
                    todos={todos}
                  />
      </div>
    );
  }


}

export default hot(module)(App);