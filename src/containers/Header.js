import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MillenniumPuzzleIcon from '../assets/images/MillenniumPuzzleIcon.png';

const useStyles = makeStyles({
  titleStyles: {
    marginLeft: '4px',
    cursor: 'default',
  },
  iconStyles: {
    width: '48px',
  }
})
const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography
          variant="h6"
          style={{ fontFamily: 'Orbitron' }}
          className={classes.titleStyles}
        >
          YUGIDEX
        </Typography>
        <Paper
          component='img'
          src={MillenniumPuzzleIcon}
          className={classes.iconStyles}
          elevation={0}
          square
          />
      </Toolbar>
    </AppBar>
  );
}
export default Header;