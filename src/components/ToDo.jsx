import React from 'react';

function ToDo(props) {

  const handleDeleteTodo = (name) => {
    props.deleteTodo(name)
  }

  const handleMoveUp = (name) => {
    props.moveUp(name)
  }

  const handleMoveDown = (name) => {
    props.moveDown(name)
  }

  return(
    <div>
      {props.name}
      <button onClick={() => handleDeleteTodo(props.name)}>x</button>
      <button onClick={() => handleMoveUp(props.name)}>x</button>
      <button onClick={() => handleMoveDown(props.name)}>x</button>
    </div>
  )
}

export default ToDo;