import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

import { green, lightGreen, yellow, amber, red } from '@material-ui/core/colors';

function returnColour(colour) {
  switch (colour) {
    case 'red':
      return red
    case 'green':
      return green
  }
}

const styles = {
  root: {
    color: (props) =>
      returnColour(props.colour)[400],
    height: 8,
  },
  checked: {},
}

function MyCheckBoxRaw(props) {
  console.log(props, 'TIMBOOO')
  const { classes, color, name, ...other } = props;

  const handleToggleComplete = (name) => {
    props.toggleTodoComplete(name);

  }

  return (
    <Checkbox 
      onChange={() => handleToggleComplete(name)} 
      checked={props.checked} 
      style={{ backgroundColor: 'transparent' }} 
      disableRipple={true} 
      className={classes.root} 
      // {...other} 
    />);
}

const MyCheckbox = withStyles(styles)(MyCheckBoxRaw);

export default function CustomCheckBox(props) {
  console.log(props);

  return (
    <MyCheckbox 
      name={props.name}
      toggleTodoComplete={props.toggleTodoComplete}
      checked={props.checked} 
      colour={props.colour} 
      />
  );
}
