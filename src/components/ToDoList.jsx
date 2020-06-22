import React from 'react';
import ToDo from './ToDo';

function ToDoList(props) {
  // console.log(props.todos);
  return(
    <div>
      {props.title}
      {props.todos.map((todo, index) => {
        console.log(todo)
        return <ToDo key={`${todo}XYZ`} index={index} name={todo.name} done={todo.done} urgency={todo.urgency} deleteTodo={props.deleteTodo} moveUp={props.moveUp} moveDown={props.moveDown} toggleTodoComplete={props.toggleTodoComplete}/>
      })}
    </div>
  )
}

export default ToDoList;