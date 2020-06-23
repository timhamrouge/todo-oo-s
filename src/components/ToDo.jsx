import React from 'react';

import { Card, CardContent, CardActions, Divider, Grid, IconButton, CardHeader, Checkbox } from '@material-ui/core'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


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
      <Card>
        <CardContent>
          <Grid container spacing={0} align="center">
            <Grid
              style={{ display: 'block' }}
              item xs={2}>
              <Checkbox checked={done} color="default" onChange={() => handleToggleComplete(name)} inputProps={{ 'aria-label': 'checkbox with default color' }} />
            </Grid>
            <Grid
              item xs={8}>
              {done ?
                <div style={{ textDecoration: "line-through" }}>
                  {name}
                </div>
                :
                name
              }
            </Grid>
            <Grid
              item xs={2}>
              <IconButton onClick={() => handleDeleteTodo(name)} aria-label="settings">
                <DeleteForeverIcon />
              </IconButton>
            </Grid>

          </Grid>
        </CardContent>

      </Card>
    </div>
  )
}

export default ToDo;