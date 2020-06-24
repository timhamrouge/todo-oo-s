import React from 'react';

import { Card, CardContent, CardActions, Divider, Grid, IconButton, CardHeader, Checkbox, Typography } from '@material-ui/core'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import CustomCheckBox from './CustomCheckBox';


function ToDo(props) {
  const { name, done, dueDate, urgency } = props;

  console.log(dueDate, props);

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
          <Grid border={1} container spacing={0} 
    // align="center"
    // justify="center"
    // direction="column"
            style={{width: '100%', marign: '0'}}
            
          >
            <Grid
              // style={{ margin: '0 auto' }}
              container
              align="center"
              justify="center"
              direction="column"

              // style={{ display: 'block'}}
              // container
              item xs={2}>
            <CustomCheckBox name={name} checked={done} urgency={urgency} toggleTodoComplete={props.toggleTodoComplete} colour="green"></CustomCheckBox>

            </Grid>
            <Grid
              container
              align="center"
              justify="center"
              direction="column"
              style={{ margin: '0 auto', textAlign: 'left' }}

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
                </Typography>}
              
             {dueDate && dueDate.length ? <Typography>

{dueDate}
</Typography> : null
}
            </Grid>
            <Grid

              container
              align="center"
              justify="center"
              direction="column"
              style={{ margin: '0 auto' }}

              item xs={2}>

              <IconButton
                disableFocusRipple={true}
                disableRipple={true}
                onClick={() => handleDeleteTodo(name)} aria-label="settings">
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