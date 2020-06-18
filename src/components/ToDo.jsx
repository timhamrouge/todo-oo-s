import React from 'react';

function ToDo(props) {
  const {name} = props;

  const handleDeleteTodo = (name) => {
    props.deleteTodo(name)
  }

  const handleMoveUp = (name) => {
    const { index } = props;
    props.moveUp(name, index, index-1)
  }

  const handleMoveDown = (name) => {
    const { index } = props;
    props.moveUp(name, index, index+1)
  }

  console.log(props);

  return(
    <div>
      {name}
      <button onClick={() => handleDeleteTodo(props.name)}>x</button>
      <button onClick={() => handleMoveUp(props.name)}>Up</button>
      <button onClick={() => handleMoveDown(props.name)}>Down</button>
    </div>
  )
}

export default ToDo;