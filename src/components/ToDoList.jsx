import React from 'react';
import ToDo from './ToDo';

import { CardContent, Card } from '@material-ui/core'


function ToDoList(props) {
  // console.log(props.todos);
  return (
    <div>
{ props.todos && props.todos.length ?
      props.todos.map((todo, index) => {
        return <ToDo 
        key={`${todo}XYZ`} 
        index={index} 
        name={todo.name} 
        done={todo.done} 
        dueDate={todo.dueDate}
        urgency={todo.urgency} 
        deleteTodo={props.deleteTodo} 
        moveUp={props.moveUp} 
        moveDown={props.moveDown} 
        toggleTodoComplete={props.toggleTodoComplete} 
        />
      }) : 
      <Card>
        <CardContent>No Todos Found</CardContent>
      </Card>
}
    </div>
  )
}

export default ToDoList;