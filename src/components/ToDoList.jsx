import React from 'react';
import ToDo from './ToDo';

function ToDoList(props) {
  console.log(props.todos);
  return(
    <div>
      HI
      {/* {props.todos.map(todo => {
        return <ToDo key={`${todo}XYZ`} name={todo} deleteTodo={props.deleteTodo} moveUp={props.moveUp} moveDown={props.moveDown} />
      })} */}
    </div>
  )
}

export default ToDoList;