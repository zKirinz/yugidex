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
import InfiniteScroll from 'react-infinite-scroll-component';

const useStyles = makeStyles({
  cardsListWrapperStyles: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  cardWrapperStyles: {
    width: '96px',
    height: '140px',
    marginBottom: '7px',
    marginTop: '7px'
  },
  cardStyles: {
    width: '96px',
    height: '140px',
    marginRight: '0',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  headerStyles: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: '#fff',
    textAlign: 'center',
    fontSize: '20px',
    marginBottom: '8px',
  },
  cardsWrapperStyles: {
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  infiniteScroll: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
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
      backgroundImage: '-webkit-gradient(linear, left bottom, left top, color-stop(0.44, rgb(122, 153, 217)), color-stop(0.72, rgb(73, 125, 189)), color-stop(0.86, rgb(28, 58, 148)))',
    },
  },
  circularProgress: {
    justifySelf: 'center',
  },
  loaderStyles: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const CardsList = (props) => {
  const classes = useStyles();
  const [cardsList, setCardsList] = useState([]);
  const [dataStatus, setDataStatus] = useState({});
  const length = 100;
  const moreCardsFetching = async () => {
    try {
      const response = await get(dataStatus.next_page);
      setDataStatus(response.data.meta);
      setCardsList(cardsList.concat(response.data.data));
    } catch (ex) {
      console.log('Fetch cards error!');
    }
  }
  const Loader = () => {
    return (
      <Paper className={classes.loaderStyles}>
        <CircularProgress size="60px" thickness={5} className={classes.circularProgress} />
      </Paper>
    )
  }
  const cardsFetching = async () => {
    try {
      const response = await get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=${length}&offset=0`);
      setDataStatus(response.data.meta);
      setCardsList(response.data.data);
    } catch (ex) {
      console.log('Fetch cards error!');
    }
  }
  useEffect(() => {
    cardsFetching();
  }, []);
  return (
    <Paper className={classes.cardsListWrapperStyles}>
      <Paper className={classes.headerStyles} square variant='outlined'>
        Cards List
      </Paper>
      <Paper className={classes.cardsWrapperStyles}>
        <InfiniteScroll
          dataLength={cardsList.length}
          next={moreCardsFetching}
          loader={<Loader />}
          hasMore={dataStatus.rows_ramaining !== 0 ? true : false}
          height='calc(100vh - 145px)'
          className={classes.infiniteScroll}
        >
          {cardsList.map((cardsInfo) => (
            <Grid item container justify='center' xs={3} key={cardsInfo.id}>
              <Card className={classes.cardWrapperStyles}>
                <CardMedia
                  image={cardsInfo.card_images[0].image_url_small}
                  className={classes.cardStyles}
                  onMouseEnter={() => setTimeout(() => props.setCardTarget(cardsInfo), 0)}
                />
              </Card>
            </Grid>
          ))}
        </InfiniteScroll>
      </Paper>
    </Paper>
  );
}
export default CardsList;