import React, { useState } from 'react';
import {
  Grid,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import CardsList from './CardsList';
import CardsDetail from './CardsDetail';
import CardsOptions from './CardsOptions';

const useStyles = makeStyles({
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'transparent',
    overflow: 'auto',
  },
  headerStyles: {
    width: '100vw',
    height: '64px',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginTop: '24px',
    marginBottom: '24px',
    overflow: 'auto',
  },
  cardDetailStyles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '32px',
    marginRight: '12px',
    minWidth: '250px',
    overflowY: "auto",
    overflowX: "hidden",
    '&::-webkit-scrollbar-thumb': {
      backgroundImage: '-webkit-gradient(linear, left top, left bottom, color-stop(0.44, rgb(122, 153, 217)), color-stop(0.72, rgb(73, 125, 189)), color-stop(0.86, rgb(28, 58, 148)))',
    },
  },
  cardsListStyles: {
    overflowY: 'hidden',
    minWidth: '420px',
  },
  CardsOptionsStyles: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
    marginLeft: '16px',
    minWidth: '320px',
  }
})

const YugiDex = (props) => {
  const [cardTarget, setCardTarget] = useState(0);
  const [cardTargetVersion, setCardTargetVersion] = useState(0);
  const [cardsFilterName, setCardsFilterName] = useState("");
  const [cardsFilterType, setCardsFilterType] = useState("");
  const [cardsFilterRace, setCardsFilterRace] = useState("");
  const [cardsFilterAttribute, setCardsFilterAttribute] = useState("");
  const [cardsFilterLevelRank, setCardsFilterLevelRank] = useState("");
  const [cardsFilterLevelRankCompare, setCardsFilterLevelRankCompare] = useState("");
  const [cardsFilterLink, setCardsFilterLink] = useState("");
  const [cardsFilterAtk, setCardsFilterAtk] = useState("");
  const [cardsFilterAtkCompare, setCardsFilterAtkCompare] = useState("");
  const [cardsFilterDef, setCardsFilterDef] = useState("");
  const [cardsFilterDefCompare, setCardsFilterDefCompare] = useState("");
  const [cardsFilterSort, setCardsFilterSort] = useState("name");
  const classes = useStyles();
  return (
    <Paper className={classes.pageWrapper}>
      <Paper className={classes.headerStyles} elevation={24}>
        <Header />
      </Paper>
      <Paper className={classes.content} elevation={24}>
        <Grid item xs={3} className={classes.cardDetailStyles}>
          <CardsDetail cardTarget={cardTarget} cardTargetVersion={cardTargetVersion} />
        </Grid>
        <Grid item xs={5} className={classes.cardsListStyles}>
          <CardsList
            cardsFilterName={cardsFilterName}
            cardsFilterType={cardsFilterType}
            cardsFilterRace={cardsFilterRace}
            cardsFilterAttribute={cardsFilterAttribute}
            cardsFilterLevelRank={cardsFilterLevelRank}
            cardsFilterLevelRankCompare={cardsFilterLevelRankCompare}
            cardsFilterLink={cardsFilterLink}
            cardsFilterAtk={cardsFilterAtk}
            cardsFilterAtkCompare={cardsFilterAtkCompare}
            cardsFilterDef={cardsFilterDef}
            cardsFilterDefCompare={cardsFilterDefCompare}
            cardsFilterSort={cardsFilterSort}
            setCardTarget={setCardTarget}
            setCardTargetVersion={setCardTargetVersion}
          />
        </Grid>
        <Grid item xs={4} className={classes.CardsOptionsStyles}>
          <CardsOptions
            setCardsFilterName={setCardsFilterName}
            setCardsFilterType={setCardsFilterType}
            setCardsFilterRace={setCardsFilterRace}
            setCardsFilterAttribute={setCardsFilterAttribute}
            setCardsFilterLevelRank={setCardsFilterLevelRank}
            setCardsFilterLevelRankCompare={setCardsFilterLevelRankCompare}
            setCardsFilterLink={setCardsFilterLink}
            setCardsFilterAtk={setCardsFilterAtk}
            setCardsFilterAtkCompare={setCardsFilterAtkCompare}
            setCardsFilterDef={setCardsFilterDef}
            setCardsFilterDefCompare={setCardsFilterDefCompare}
            setCardsFilterSort={setCardsFilterSort}
          />
        </Grid>
      </Paper>
    </Paper>
  );
}
export default YugiDex;