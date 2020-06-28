import React from 'react';
import {
  Grid,
  Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import CardsList from './CardsList';
import CardsInfo from './CardsInfo';

const useStyles = makeStyles({
  pageWrapper: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  content: {
    marginTop: '24px',
  },
  cardsListStyles: {
    height: '86vh',
    overflow: 'hidden',
  }
})
const YugiDex = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.pageWrapper} >
      <Header />
      <Grid container className={classes.content}>
        <Grid item xs={3}>
          
        </Grid>
        <Grid item xs={6} className={classes.cardsListStyles}>
          <CardsList />
        </Grid> 
        <Grid item xs={3}>
          
        </Grid>
      </Grid>
    </Paper>
  );
}
export default YugiDex;