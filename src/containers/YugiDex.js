import React, { useState } from 'react';
import {
  Grid,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import CardsList from './CardsList';
import CardsDetail from './CardsDetail';

const useStyles = makeStyles({
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  headerStyles: {
    width: '100vw',
    height: '64px',
  },
  cardDetailStyles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: '32px!important',
    overflowX: 'hidden',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '8px',
      backgroundColor: 'transparent',
    },
    '&::-webkit-scrollbar-track': {
      WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.5)',
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.5)',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      minHeight: '48px',
      borderRadius: '10px',
      backgroundImage: '-webkit-gradient(linear, left top, left bottom, color-stop(0.44, rgb(122, 153, 217)), color-stop(0.72, rgb(73, 125, 189)), color-stop(0.86, rgb(28, 58, 148)))',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginTop: '24px',
    marginBottom: '24px',
    overflow: 'hidden',
  },
  cardsListStyles: {
    overflow: 'hidden',
  },
})

const YugiDex = (props) => {
  const [cardTarget, setCardTarget] = useState(0);
  const classes = useStyles();
  return (
    <Paper className={classes.pageWrapper}>
      <Paper className={classes.headerStyles} elevation={24}>
        <Header />
      </Paper>
      <Paper className={classes.content} elevation={24}>
        <Grid item xs={3} className={classes.cardDetailStyles}>
          <CardsDetail cardTarget={cardTarget} />
        </Grid>
        <Grid item xs={5} className={classes.cardsListStyles}>
          <CardsList setCardTarget={setCardTarget} />
        </Grid>
        <Grid item xs={4}>

        </Grid>
      </Paper>
    </Paper>
  );
}
export default YugiDex;