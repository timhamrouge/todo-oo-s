import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import ToDoList from "./components/ToDoList";

import { Container, TextField, Tabs, Tab, Box, Slider, Typography, Button, FormControl, FormControlLabel, Checkbox, Input, InputLabel, TabScrollButton } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, todos, ...rest } = props;

  return (
    <div
      role="tabpanel"
      hidden={props.value !== props.index}
      // id={`simple-tabpanel-${index}`}
      // aria-labelledby={`simple-tab-${index}`}
      {...rest}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  )
}

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
    this.urgency = urgency || 0;
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
    newTodoUrgency: 0,
    newTodoForToday: false,
    newTodoDueDate: '',
    currentTab: 0,
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

  handleUrgencyField = (e, val) => {
    this.setState({ newTodoUrgency: val })
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
    this.setState({ newTodoForToday })
  }

  handleDueDate = (e) => {
    console.log(e.target.value)
    let newTodoDueDate = e.target.value;
    this.setState({ newTodoDueDate });
  }

  handleTabChange = (e, val) => {
    console.log(e, val);
    this.setState({ currentTab: val });
  }

  render() {
    const { todos, newTodoName, newTodoUrgency, newTodoForToday, newTodoDueDate, currentTab } = this.state;
    console.log(this.state);

    const marks = [
      {
        value: 0,
        label: '<- Very Low',
      }, {
        value: 1,
      }, {
        value: 2,
      }, {
        value: 3,
      }, {
        value: 4,
      }, {
        value: 5,
        label: 'Very High ->',
      }
    ]

    return (
      <div className="App">
        <Container maxWidth="sm">

          <form>
            <TextField
              id="todo-name"
              label="Task Name"
              value={newTodoName}
              onChange={(e) => this.handleNameField(e)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <br />

            <TextField
              id="date"
              label="Due Date"
              type="date"
              value={newTodoDueDate}
              onChange={(e) => this.handleDueDate(e)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />            <br />

            <FormControl>
              <FormControlLabel
                control={<Checkbox checked={newTodoForToday} onChange={() => this.handleDueToday()} name="todo-today" />}
                label="Do Today?"
              />
            </FormControl>
            <br />
            <br />


            <Typography id="urgency-label" gutterBottom>
              Urgency
      </Typography>
            <Slider
              defaultValue={0}
              step={newTodoUrgency}
              aria-labelledby="urgency-label"
              marks={marks}
              onChangeCommitted={(e, val) => this.handleUrgencyField(e, val)}
              min={0}
              max={5}
            ></Slider>

            <br />
            <br />



            <br />
            <Button type="submit" onClick={(e) => this.addTodo(e)} variant="contained">Submit</Button>
          </form>
        </Container>
          <Container style={{maxWidth: '600px'}}>
            <Tabs value={this.state.currentTab} onChange={(e, val) => this.handleTabChange(e, val)}>
              <Tab label="ALL TODOS"></Tab>
              <Tab label="TODAY"></Tab>
            </Tabs>
            <TabPanel value={this.state.currentTab} index={0}>
            <ToDoList
          todos={todos.list}
          moveUp={this.moveUp}
          moveDown={this.moveDown}
          deleteTodo={this.deleteTodo}
          toggleTodoComplete={this.toggleTodoComplete}
        />
            </TabPanel>
            <TabPanel value={this.state.currentTab} index={1}>
            <ToDoList
          todos={todos.list.filter(todo => todo.today)}
          moveUp={this.moveUp}
          moveDown={this.moveDown}
          deleteTodo={this.deleteTodo}
          toggleTodoComplete={this.toggleTodoComplete}
        />
            </TabPanel>

            <br />
            <br />
            <br />

          </Container>
      </div>
    );
  }

}


export default hot(module)(App);