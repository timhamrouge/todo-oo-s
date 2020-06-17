import React from 'react';

function ToDo(props) {

  const handleDeleteTodo = (name) => {
    props.deleteTodo(name)
  }

  return(
    <div>
      {props.name}
      <button onClick={() => handleDeleteTodo(props.name)}>x</button>
    </div>
  )
}

export default ToDo;