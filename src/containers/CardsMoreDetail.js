import React, { useState, useEffect } from 'react';
import { get } from '../utils/ApiCaller';
import {
  Paper,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Typography,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import LevelIcon from '../assets/images/LevelIcon.svg.png';
import RankIcon from '../assets/images/RankIcon.svg.png';
import miniCardImage from '../components/miniCardImage';
import limitedButtons from '../components/limitedButtons';
import attribute from '../components/attribute';

const useStyles = makeStyles(theme => ({
  pageWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '64px 1fr',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'transparent',
    overflow: 'auto',
  },
  contentWrapper: {
    display: 'flex',
    backgroundColor: 'transparent',
    marginTop: '36px',
    marginBottom: '36px',
    overflow: 'auto',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    overflow: 'auto',
    backgroundColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      height: 'max-content',
    }
  },
  loaderStyles: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
    minWidth: '400px',
    height: '600px',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '36px'
    }
  },
  cardImageStyles: {
    width: '343px',
    height: '500px',
    backgroundColor: 'transparent',
  },
  cardInfoStyles: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'min-content min-content min-content min-content min-content',
    gridRowGap: '12px',
    width: '40vw',
    minWidth: '400px',
    padding: '0',
    backgroundColor: 'transparent',
  },
  buttonGroupStyles: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    width: '100%',
    marginTop: '16px',
    marginBottom: '12px',
  },
  limitedButtonStyles: {
    backgroundColor: '#e74c3c'
  },
  cardNameLevelStyles: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
  },
  cardLevelStyles: {
    display: 'flex',
    backgroundColor: 'transparent',
    whiteSpace: 'nowrap',
  },
  cardImageTypeIDAttributeStyles: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  cardImageTypeIDStyles: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  cardATKDEFScaleLinkStyles: {
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  cardEffectStyles: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    wordWrap: 'break-word',
  },
  cardPricesStyles: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  cardSellerStyles: {
    margin: '8px 12px 8px 12px',
  }
}));

const CardsMoreDetail = (props) => {
  const classes = useStyles();
  const { match, history } = props;
  const { params } = match;
  const { cardID } = params;
  const [card, setCard] = useState(undefined);
  const linkConverter = (linkmarkers) => {
    let temp = '';
    linkmarkers.forEach((direction) => {
      switch (direction) {
        case 'Left':
          temp += '←';
          break;
        case 'Bottom-Left':
          temp += '↙';
          break;
        case 'Bottom':
          temp += '↓';
          break;
        case 'Bottom-Right':
          temp += '↘';
          break;
        case 'Right':
          temp += '→';
          break;
        case 'Top-Right':
          temp += '↗';
          break;
        case 'Top':
          temp += '↑';
          break;
        case 'Top-Left':
          temp += '↖';
          break;
        default:
          break;
      }
    });
    return temp;
  }
  const Loader = () => {
    return (
      <Paper className={classes.loaderStyles}>
        <CircularProgress size="60px" thickness={5} className={classes.circularProgress} />
      </Paper>
    )
  };
  useEffect(() => {
    const cardFetching = async () => {
      try {
        const response = await get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${cardID}`);
        setCard(response.data.data[0]);
      } catch (ex) {
        setCard(false);
      }
    }
    cardFetching();
  }, []);
  return (
    <Paper className={classes.pageWrapper}>
      <Paper className={classes.headerStyles} elevation={24}>
        <Header />
      </Paper>
      <Paper className={classes.contentWrapper} elevation={24}>
        {card ?
          <Card className={classes.content}>
            <Paper className={classes.cardImageWrapper}>
              <CardMedia image={card.card_images[0].image_url} className={classes.cardImageStyles} />
              <Paper className={classes.buttonGroupStyles}>
                {limitedButtons(card.banlist_info)}
              </Paper>
              <Button
                variant='contained'
                color='primary'
                onClick={() => history.push('/')}
              >
                back to yugidex
                </Button>
            </Paper>
            <CardContent className={classes.cardInfoStyles}>
              <Paper elevation={24} className={classes.cardNameLevelStyles}>
                <Typography variant='h6' style={{ margin: '16px 16px 16px 24px' }}>{card.name}</Typography>
                <Paper elevation={0} className={classes.cardLevelStyles}>
                  <CardMedia
                    image={card.level ?
                      ((card.type === 'XYZ Monster' || card.type === 'XYZ Pendulum Effect Monster') ?
                        RankIcon
                        : LevelIcon)
                      : ""}
                    style={{ width: '32px', marginRight: '8px' }}
                    component='img'
                  />
                  <Typography
                    variant="h5"
                    style={{ marginRight: '16px' }}>
                    {card.level ? card.level : ""}
                  </Typography>
                </Paper>
              </Paper>
              <Paper elevation={24} className={classes.cardImageTypeIDAttributeStyles}>
                <Paper className={classes.cardImageTypeIDStyles}>
                  <CardMedia
                    src={miniCardImage(card.type)}
                    style={{ width: '32px', margin: '8px 12px 8px 12px' }}
                    component='img'
                    title={card.type}
                  />
                  <Typography
                    variant='body1'
                    style={{ wordBreak: 'break-word', wordWrap: 'break-word' }}>
                    {card.type} / ID: {card.id}
                  </Typography>
                </Paper>
                <CardMedia
                  src={attribute(card)}
                  style={{ width: '32px', margin: '8px 12px 8px 12px' }}
                  component='img'
                  title={card.type === "Skill Card" ? "" : (card.attribute || card.race)}
                />
              </Paper>
              {(card.type === "Skill Card" || card.type === "Spell Card" || Card.type === "Trap Card") ?
                ""
                : <Paper className={classes.cardATKDEFScaleLinkStyles}>
                  <Typography variant='body1' style={{ margin: '8px 12px 8px 12px' }}>
                    {`${card.level ?
                      `ATK: ${card.atk} / DEF: ${card.def} ${card.scale ?
                        `/ SCALE: ${card.scale}`
                        : ""}`
                      : `${card.linkval ?
                        `ATK: ${card.atk} / LINK: ${card.linkval} [${linkConverter(card.linkmarkers)}]` :
                        ""}`}`
                    }
                  </Typography>
                </Paper>
              }
              <Paper className={classes.cardEffectStyles}>
                <Typography variant='body2' style={{ margin: '16px 12px 16px 12px' }}>
                  {card.desc}
                </Typography>
              </Paper>
              <Paper className={classes.cardPricesStyles}>
                <Typography variant='body2' className={classes.cardSellerStyles}>
                  <i className="fas fa-shopping-cart" title="Card Market Price"></i>
                  &nbsp;Card Market: {card.card_prices[0].cardmarket_price}
                  <i className="fas fa-dollar-sign"></i>
                </Typography>
                <Typography variant='body2' className={classes.cardSellerStyles}>
                  <i className="fas fa-box-open" title="TCG Player Price"></i>
                  &nbsp;TCG Player: {card.card_prices[0].tcgplayer_price}
                  <i className="fas fa-dollar-sign"></i>
                </Typography>
                <Typography variant='body2' className={classes.cardSellerStyles}>
                  <i className="fab fa-ebay" title="Ebay Price"></i>
                  &nbsp;Ebay: {card.card_prices[0].ebay_price}
                  <i className="fas fa-dollar-sign"></i>
                </Typography>
                <Typography variant='body2' className={classes.cardSellerStyles}>
                  <i className="fab fa-amazon" title="Amazon Price"></i>
                  &nbsp;Amazon: {card.card_prices[0].amazon_price}
                  <i className="fas fa-dollar-sign"></i>
                </Typography>
              </Paper>
            </CardContent>
          </Card>
          : <Loader />}
      </Paper>
    </Paper>
  )
};

export default CardsMoreDetail;