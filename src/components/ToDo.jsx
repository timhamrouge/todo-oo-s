import React from 'react';

import { Card, CardContent, CardActions, Divider, Grid, IconButton, CardHeader, Checkbox, Typography } from '@material-ui/core'

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
  const col = props.urgency == 0 ? 'rgba(0, 0, 0, 0.87)' : 'red'

  return (
    <div>
      <Card>
        <CardContent>
          <Grid border={1} container spacing={0}
          >
            <Grid
                        style={{display: 'flex'}}
                        align="center"
                        justify="center"
                        direction="column"
              item xs={2}>
              <Checkbox checked={done} color="default" onChange={() => handleToggleComplete(name)} inputProps={{ 'aria-label': 'checkbox with default color' }} />
            </Grid>
            <Grid
              style={{display: 'flex'}}
              align="center"
              justify="center"
              direction="column"
            // style={{ display: 'block'}}
              item xs={8}>
              {done ?
                <div style={{ textDecoration: "line-through" }}>
                  <Typography>

                  {name}
                  </Typography>
                </div>
                :
                <Typography>

                {name}
                </Typography>

              }
            </Grid>
            <Grid
            style={{ display: 'flex'}}
            align="center"
            justify="center"
            direction="column"
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