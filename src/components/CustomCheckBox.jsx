import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

import { green, lightGreen, yellow, amber, red, grey } from '@material-ui/core/colors';

function returnColour(urgency) {
  switch (urgency) {
    case 1:
      return green
    case 2:
      return lightGreen
    case 3:
      return yellow
    case 4:
      return amber
    case 5:
      return red
    default:
      return grey
  }
}

const styles = {
  root: {
    color: (props) =>
      returnColour(props.urgency)[400],
    height: 8,
  },
  checked: {},
}

function MyCheckBoxRaw(props) {
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
      urgency={props.urgency}
    />
  );
}
