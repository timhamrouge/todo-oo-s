import React, { Component} from "react";
import ToDoList from "./components/ToDoList"
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  state = {
    todos: ['1', '2', '3']
  }
  render(){
    const { todos } = this.state;
    console.log(todos)
    return(
      <div className="App">
        <ToDoList 
          todos={todos}
        />
      </div>
    );
  }
}

export default hot(module)(App);