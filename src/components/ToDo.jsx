import React from 'react';

import { Card, CardContent, CardActions, Divider, Grid, IconButton, CardHeader, Checkbox, Typography } from '@material-ui/core'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import CustomCheckBox from './CustomCheckBox';


function ToDo(props) {
  const { name, done, dueDate } = props;

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
  const col = props.urgency == 0 ? 'rgba(0, 0, 0, 0.87)' : 'red'

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
              style={{ backgroundColor: 'transparent' }}
              container
              align="center"
              justify="center"
              direction="column"

              // style={{ display: 'block'}}
              // container
              item xs={2}>
            <CustomCheckBox colour="green"></CustomCheckBox>

              <Checkbox
                disableRipple={true}
              style={{ backgroundColor: 'transparent' }}

                checked={done} color="default" onChange={() => handleToggleComplete(name)} inputProps={{ 'aria-label': 'checkbox with default color' }} />
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