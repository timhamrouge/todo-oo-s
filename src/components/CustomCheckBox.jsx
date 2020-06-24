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
}

function MyCheckBoxRaw(props) {
  console.log(props, 'TIMBOOO')
  const { classes, color, ...other } = props;
  return <Checkbox style={{ backgroundColor: 'transparent' }} disableRipple={true} className={classes.root} {...other} />;
}

const MyCheckbox = withStyles(styles)(MyCheckBoxRaw);

export default function CustomCheckBox(props) {
  return (
    <MyCheckbox colour={props.colour} />
  );
}
