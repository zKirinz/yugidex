import React from 'react';
import {
  Paper,
  Card,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardsBackside from '../assets/images/CardsBackside.png';

const useStyles = makeStyles({
  cardDetailWrapperStyles: {
    width: '100%',
    height: 'min-content',
    backgroundColor: 'transparent',
  },
  headerStyles: {
    width: '90%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: '#f0f0f0',
    textAlign: 'center',
    fontSize: '20px',
    margin: '0 16px 10px 24px',
  },
  imageWrapperStyles: {
    width: '100%',
    height: '320px',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyles: {
    width: "220px",
    height: "320px",
  },
  cardDetailStyles: {
    display: 'flex',
    flexDirection: 'column',
    width: '96%',
    
    minHeight: '100px',
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: "#f0f0f0",
    border: '1px solid #aaa',
    marginTop: '16px',
  },
  cardEffectStyles: {
    margin: '8px',
    whiteSpace: 'pre-line',
  }
});

const CardsDetail = ({ cardTarget }) => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.cardDetailWrapperStyles}>
        <Paper className={classes.headerStyles} square variant='outlined'>
          {cardTarget.name || "Card's name"}
        </Paper>
        <Card className={classes.imageWrapperStyles}>
          <CardMedia
            image={cardTarget ? cardTarget.card_images[0].image_url : CardsBackside}
            className={classes.imageStyles}
          />
        </Card>
        <Paper className={classes.cardDetailStyles} square variant='outlined'>
          <Typography variant='caption' style={{ alignSelf: 'center' }}>{cardTarget ? cardTarget.id : ""}</Typography>
          <Typography variant='body2' style={{ margin: '8px' }}>
            {cardTarget ? `[${cardTarget.type}] ${cardTarget.race}/${cardTarget.attribute || cardTarget.archetype || "???"}` : ""}
          </Typography>
          <Typography variant='body2' className={classes.cardEffectStyles}>
            {cardTarget ? `${cardTarget.desc}` : ""}
          </Typography>
        </Paper>
      </Paper>
    </>
  );
}
export default CardsDetail;