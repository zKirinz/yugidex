import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CircularProgress,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { get } from '../utils/ApiCaller';

const useStyles = makeStyles({
  cardsListStyles: {
    overflowY: 'scroll',
    height: '100%',
    '&::-webkit-scrollbar': {
      width: '6px',
      backgroundColor: 'transparent',
    },
    '&::-webkit-scrollbar-track': {
      WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.5)',
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.5)',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      minHeight: '100px',
      cursor: 'move',
      borderRadius: '10px',
      backgroundImage: '-webkit-gradient(linear, left bottom, left top, color-stop(0.44, rgb(122, 153, 217)), color-stop(0.72, rgb(73, 125, 189)), color-stop(0.86, rgb(28, 58, 148)))',
    },
    '&::-webkit-scrollbar-thumb:hover': {

    }
  },
  cardWrapperStyles: {
    width: '96px',
    height: '140px',
    marginBottom: '16px',
  },
  cardStyles: {
    width: '96px',
    height: '140px',
    marginRight: '0',
  },
  headerStyles: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: '#fff',
    textAlign: 'center',
    fontSize: '20px',
    marginBottom: '10px',
  },
})

const CardsList = (props) => {
  const [cardsList, setCardsList] = useState(0);
  const classes = useStyles();
  const cardsFetching = async () => {
    try {
      const response = await get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
      setCardsList(response.data.data);
    } catch (ex) {
      console.log('Fetch cards error!');
    }
  }
  useEffect(() => {
    cardsFetching();
  }, [])
  return (
    <>
      <Paper className={classes.headerStyles} square variant='outlined'>
        Cards List
      </Paper>
      <Grid
        container
        className={classes.cardsListStyles}
        justify={cardsList ? "flex-start" : "center"}
        alignItems={cardsList ? "flex-start" : "center"}
      >
        {cardsList ? (
          cardsList.map((cardsInfo) => (
            <Grid item container justify='center' xs={2} key={cardsInfo.id}>
              <Card className={classes.cardWrapperStyles}>
                <CardMedia
                  image={cardsInfo.card_images[0].image_url_small}
                  className={classes.cardStyles}
                />
              </Card>
            </Grid>
          ))
        ) : (<CircularProgress color='primary' size='60px' thickness={4} />)}
      </Grid>
    </>
  );
}
export default CardsList;