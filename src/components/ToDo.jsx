import React from 'react';

function ToDo(props) {
  const { name, done } = props;

  const handleDeleteTodo = (name) => {
    props.deleteTodo(name)
  }

  const handleMoveUp = (name) => {
    const { index } = props;
    props.moveUp(name, index, index - 1)
  }

  const handleMoveDown = (name) => {
    const { index } = props;
    props.moveUp(name, index, index + 1)
  }

  const handleToggleComplete = (name) => {
    props.toggleTodoComplete(name);
    
  }

  console.log(props);

  return (
    <div>
    <input type="checkbox" value={done} onClick={() => handleToggleComplete(name)}/>
      {done ?
        <div style={{textDecoration:"line-through"}}>
          {name}
        </div>
        :
      name
      }
      Urgency: {props.urgency}
      <button onClick={() => handleDeleteTodo(name)}>x</button>
      <button onClick={() => handleMoveUp(name)}>Up</button>
      <button onClick={() => handleMoveDown(name)}>Down</button>
    </div>
  )
}

export default ToDo;