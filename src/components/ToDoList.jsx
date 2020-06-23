import React from 'react';
import ToDo from './ToDo';

import { Paper } from '@material-ui/core'


function ToDoList(props) {
  // console.log(props.todos);
  return (
    <div>
      {/* <Paper variant="outlined" style={{padding: '10px 10px 10px 10px'}}> */}

      {props.todos.map((todo, index) => {
        return <ToDo 
        key={`${todo}XYZ`} 
        index={index} 
        name={todo.name} 
        done={todo.done} 
        urgency={todo.urgency} 
        deleteTodo={props.deleteTodo} 
        moveUp={props.moveUp} 
        moveDown={props.moveDown} 
        toggleTodoComplete={props.toggleTodoComplete} 
        />
      })}
      {/* </Paper> */}
    </div>
  )
}

export default ToDoList;