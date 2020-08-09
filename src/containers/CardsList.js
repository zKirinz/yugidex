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
import banSign from '../assets/images/banSign.png';
import limitedSign from '../assets/images/limitedSign.png';
import semilimitedSign from '../assets/images/semilimitedSign.png';

const useStyles = makeStyles({
  cardsListWrapperStyles: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  cardStyles: {
    width: '103px',
    height: '150px',
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
  cardWrapperStyles: {
    width: '103px',
    height: '150px',
    marginBottom: '20px',
    marginTop: '20px'
  },
  banListStyles: {
    width: '36px',
  },
  infiniteScroll: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
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
  const length = 40;
  const moreCardsFetching = async () => {
    try {
      const response = await get(dataStatus.next_page);
      setDataStatus(response.data.meta);
      setCardsList(cardsList.concat(response.data.data));
    } catch (ex) {
      console.log('Fetch cards error!');
    }
  };
  const Loader = () => {
    return (
      <Paper className={classes.loaderStyles}>
        <CircularProgress size="60px" thickness={5} className={classes.circularProgress} />
      </Paper>
    )
  };
  const banListSignConverter = (ban_tcg) => {
    if (ban_tcg === "Banned")
      return banSign;
    else if (ban_tcg === "Limited")
      return limitedSign;
    else return semilimitedSign;
  };
  useEffect(() => {
    const apiRequestConverter = () => {
      let temp = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?';
      if (props.cardsFilterName !== "")
        temp += '&fname=' + props.cardsFilterName.replace(" ", "%20");
      if (props.cardsFilterType !== "")
        temp += '&type=' + props.cardsFilterType.replace(" ", "%20");
      if (props.cardsFilterRace !== "")
        temp += '&race=' + props.cardsFilterRace.replace(" ", "%20");
      if (props.cardsFilterAttribute !== "")
        temp += '&attribute=' + props.cardsFilterAttribute;
      if (props.cardsFilterLevelRank !== "")
        temp += '&level=' + props.cardsFilterLevelRankCompare + props.cardsFilterLevelRank;
      if (props.cardsFilterLink !== "")
        temp += '&link=' + props.cardsFilterLink;
      if (props.cardsFilterAtk !== "")
        temp += '&atk=' + props.cardsFilterAtkCompare + props.cardsFilterAtk;
      if (props.cardsFilterDef !== "")
        temp += '&def=' + props.cardsFilterDefCompare + props.cardsFilterDef;
      if (props.cardsFilterSort !== "")
        temp += '&sort=' + props.cardsFilterSort;
      temp += `&num=${length}&offset=0`;
      return temp;
    };
    const cardsFetching = async () => {
      try {
        const response = await get(apiRequestConverter());
        setDataStatus(response.data.meta);
        setCardsList(response.data.data);
      } catch (ex) {
        setCardsList([]);
        setDataStatus({ rows_remaining: 0 });
      }
    };
    cardsFetching();
  }, [
    props.cardsFilterName,
    props.cardsFilterType,
    props.cardsFilterRace,
    props.cardsFilterAttribute,
    props.cardsFilterLevelRank,
    props.cardsFilterLevelRankCompare,
    props.cardsFilterLink,
    props.cardsFilterAtk,
    props.cardsFilterAtkCompare,
    props.cardsFilterDef,
    props.cardsFilterDefCompare,
    props.cardsFilterSort,
  ]);
  return (
    <Paper className={classes.cardsListWrapperStyles}>
      <Paper className={classes.headerStyles} square variant='outlined'>
        Cards Library
      </Paper>
      <Paper className={classes.cardsWrapperStyles}>
        <InfiniteScroll
          dataLength={cardsList.length}
          next={moreCardsFetching}
          loader={<Loader />}
          hasMore={dataStatus.rows_remaining !== 0 ? true : false}
          height='calc(100vh - 145px)'
          style={{ alignContent: 'flex-start' }}
          className={classes.infiniteScroll}
        >
          {cardsList.map((cardsInfo) => (
            cardsInfo.card_images.map((cardImages, index) => (
              <Grid item container justify='center' xs={3} key={cardImages.id}>
                <Card className={classes.cardWrapperStyles}>
                  <CardMedia
                    image={cardImages.image_url_small}
                    className={classes.cardStyles}
                    onMouseEnter={() => {
                      props.setCardTarget(cardsInfo);
                      props.setCardTargetVersion(index);
                    }}
                  >
                    {(cardsInfo.banlist_info && cardsInfo.banlist_info.ban_tcg) ?
                      <img
                        src={banListSignConverter(cardsInfo.banlist_info.ban_tcg)}
                        alt="banlist sign"
                        className={classes.banListStyles} />
                      : ""}
                  </CardMedia>
                </Card>
              </Grid>
            ))
          ))}
        </InfiniteScroll>
      </Paper>
    </Paper>
  );
}
export default CardsList;