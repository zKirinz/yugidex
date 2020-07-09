import React, { useState } from 'react';
import {
  Paper,
  Card,
  CardContent,
  InputLabel,
  Input,
  TextField,
  MenuItem,
  InputAdornment,
  IconButton,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';
import TrendingDownRoundedIcon from '@material-ui/icons/TrendingDownRounded';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import {
  mainDeckTypes,
  extraDeckTypes,
  monsterCardsRaces,
  spellCardsRaces,
  trapCardsRaces,
  monsterCardsAttribute,
  monsterCardsLevelRank,
  monsterCardsLink,
} from './CardsFilter';

const Selector = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#fff',
    },
    width: '43%',
    marginTop: '24px',
    marginBottom: '24px'
  }
})(props => (
  <TextField
    id={props.id}
    select={props.select}
    disabled={props.disabled || false}
    type={props.type}
    label={props.label}
    value={props.value}
    onChange={props.onChange}
    className={props.classes.root}
    InputProps={props.InputProps}
  >
    {props.children}
  </TextField>
));

const useStyles = makeStyles(theme => ({
  cardsOptionsWrapperStyles: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  cardsOptionsHeaderStyles: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: '#fff',
    textAlign: 'center',
    fontSize: '20px',
    marginBottom: '8px',
  },
  cardsOptionsContentStyles: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '96px 96px 96px 96px 96px 100px',
    justifyItems: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    height: 'calc(100vh - 145px)',
    paddingBottom: '0!important',
    paddingTop: '0!important',
    overflowY: 'auto',
  },
  nameSearcherStyles: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
    width: '86%',
    backgroundColor: 'transparent',
    marginTop: '36px',
    marginBottom: '12px',
  },
  typeSelectorStyles: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  typeRadioStyles: {
    '& .MuiFormLabel-root': {
      color: '#fff',
    }
  }
}));

const CardsOptions = (props) => {
  const classes = useStyles();
  const handleSearchChange = e => {
    let temp = e.target.value;
    props.setCardsFilterName(temp);
  }
  const [mainDeckType, setMainDeckType] = useState("");
  const handleMainDeckType = e => {
    let temp = e.target.value;
    if (temp === "Spell Card" || temp === "Trap Card" || temp === "Skill Card") {
      setAttribute("");
      props.setCardsFilterAttribute("");
      setLevelRank("");
      props.setCardsFilterLevelRank("");
      setAtk("");
      props.setCardsFilterAtk("");
      setDef("");
      props.setCardsFilterDef("");
    }
    if (extraDeckType === "Link Monster") {
      setLink("");
      props.setCardsFilterLink("");
    }
    setMainDeckType(temp);
    setExtraDeckType("");
    props.setCardsFilterRace("");
    props.setCardsFilterType(temp);
  };
  const [extraDeckType, setExtraDeckType] = useState("");
  const handleExtraDeckType = e => {
    let temp = e.target.value;
    if (temp === "Link Monster") {
      setLevelRank("");
      props.setCardsFilterLevelRank("");
      setDef("");
      props.setCardsFilterDef("");
    }
    if (extraDeckType === "Link Monster") {
      setLink("");
      props.setCardsFilterLink("");
    }
    setExtraDeckType(temp);
    setMainDeckType("");
    props.setCardsFilterRace("");
    props.setCardsFilterType(temp);
  };
  const [race, setRace] = useState("");
  const handleRace = e => {
    let temp = e.target.value;
    setRace(temp);
    props.setCardsFilterRace(temp);
  }
  const [attribute, setAttribute] = useState("");
  const handleAttribute = e => {
    let temp = e.target.value;
    setAttribute(temp);
    props.setCardsFilterAttribute(temp);
  }
  const [levelRank, setLevelRank] = useState("");
  const handleLevelRank = e => {
    let temp = e.target.value;
    setLevelRank(temp);
    props.setCardsFilterLevelRank(temp);
  }
  const [levelRankCompare, setLevelRankCompare] = useState(0);
  const handleLevelRankCompare = () => {
    setLevelRankCompare(levelRankCompare !== 1 ? (levelRankCompare + 1) : -1);
    props.setCardsFilterLevelRankCompare(levelRankCompare === 1 ? "lte" : (levelRankCompare === 0 ? "gte" : ""));
  }
  const [link, setLink] = useState("");
  const handleLink = e => {
    let temp = e.target.value;
    setLink(temp);
    props.setCardsFilterLink(temp);
  }
  const [atk, setAtk] = useState('');
  const handleAtk = e => {
    let temp = e.target.value;
    setAtk(temp);
    props.setCardsFilterAtk(temp);
  }
  const [atkCompare, setAtkCompare] = useState(0);
  const handleAtkCompare = () => {
    setAtkCompare(atkCompare !== 1 ? atkCompare + 1 : -1);
    props.setCardsFilterAtkCompare(atkCompare === 1 ? "lte" : (atkCompare === 0 ? "gte" : ""));
  }
  const [def, setDef] = useState('');
  const handleDef = e => {
    let temp = e.target.value;
    setDef(temp);
    props.setCardsFilterDef(temp);
  }
  const [defCompare, setDefCompare] = useState(0);
  const handleDefCompare = () => {
    setDefCompare(defCompare !== 1 ? defCompare + 1 : -1);
    props.setCardsFilterDefCompare(defCompare === 1 ? "lte" : (defCompare === -1 ? "gte" : ""));
  }
  const [sort, setSort] = useState("name");
  const handleSort = e => {
    let temp = e.target.value;
    setSort(temp);
    props.setCardsFilterSort(temp);
  }
  return (
    <Card className={classes.cardsOptionsWrapperStyles}>
      <Paper className={classes.cardsOptionsHeaderStyles} square variant='outlined'>
        Cards Options
      </Paper>
      <CardContent className={classes.cardsOptionsContentStyles}>
        <Paper className={classes.nameSearcherStyles}>
          <InputLabel>Name</InputLabel>
          <Input onChange={handleSearchChange} ></Input>
        </Paper>
        <form className={classes.typeSelectorStyles} noValidate autoComplete="off">
          <Selector
            id="select-main-deck-type"
            select={true}
            label="Main Deck Type"
            value={mainDeckType}
            onChange={handleMainDeckType}
          >
            {mainDeckTypes.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Selector>
          <Selector
            id="select-extra-deck-type"
            select={true}
            label="Extra Deck Type"
            value={extraDeckType}
            onChange={handleExtraDeckType}
          >
            {extraDeckTypes.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Selector>
        </form>
        <form className={classes.typeSelectorStyles} noValidate autoComplete="off">
          <Selector
            id="select-cards-race"
            select={true}
            disabled={(
              mainDeckType === "" && extraDeckType === ""
            )}
            label="Race"
            value={race}
            onChange={handleRace}
          >
            {mainDeckType === 'Spell Card' ?
              spellCardsRaces.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>))
              : (mainDeckType === 'Trap Card' ?
                trapCardsRaces.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>))
                : monsterCardsRaces.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>)))}
          </Selector>
          <Selector
            id="select-monster-attribute"
            select={true}
            disabled={(
              mainDeckType === "Spell Card" ||
              mainDeckType === "Trap Card" ||
              mainDeckType === "Skill Card" ||
              (mainDeckType === "" && extraDeckType === "")
            )}
            label="Attribute"
            value={attribute}
            onChange={handleAttribute}
          >
            {monsterCardsAttribute.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Selector>
        </form>
        <form className={classes.typeSelectorStyles} noValidate autoComplete="off">
          <Selector
            id="select-monster-level/rank"
            select={true}
            disabled={(
              mainDeckType === 'Spell Card' ||
              mainDeckType === 'Trap Card' ||
              mainDeckType === 'Skill Card' ||
              extraDeckType === 'Link Monster' ||
              (mainDeckType === '' && extraDeckType === '')
            )}
            label="Level / Rank"
            value={levelRank}
            onChange={handleLevelRank}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    onClick={handleLevelRankCompare}
                    disabled={(
                      mainDeckType === 'Spell Card' ||
                      mainDeckType === 'Trap Card' ||
                      mainDeckType === 'Skill Card' ||
                      extraDeckType === 'Link Monster' ||
                      (mainDeckType === '' && extraDeckType === '')
                    )}>
                    {levelRankCompare === 1 ?
                      <TrendingUpRoundedIcon />
                      : (levelRankCompare === -1 ?
                        <TrendingDownRoundedIcon />
                        : <ArrowRightAltRoundedIcon />)}
                  </IconButton>
                </InputAdornment>
              )
            }}
          >
            {monsterCardsLevelRank.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Selector>
          <Selector
            id="select-monster-link"
            select={true}
            disabled={extraDeckType !== "Link Monster"}
            label="Link"
            value={link}
            onChange={handleLink}
          >
            {monsterCardsLink.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Selector>
        </form>
        <form className={classes.typeSelectorStyles} noValidate autoComplete="off">
          <Selector
            id="select-monster-ATK"
            select={false}
            disabled={(
              mainDeckType === 'Spell Card' ||
              mainDeckType === 'Trap Card' ||
              mainDeckType === 'Skill Card' ||
              (mainDeckType === '' && extraDeckType === '')
            )}
            label="ATK"
            type="number"
            value={atk}
            onChange={handleAtk}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    onClick={handleAtkCompare}
                    disabled={(
                      mainDeckType === 'Spell Card' ||
                      mainDeckType === 'Trap Card' ||
                      mainDeckType === 'Skill Card' ||
                      (mainDeckType === '' && extraDeckType === '')
                    )}>
                    {atkCompare === 1 ?
                      <TrendingUpRoundedIcon />
                      : (atkCompare === -1 ?
                        <TrendingDownRoundedIcon />
                        : <ArrowRightAltRoundedIcon />)}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Selector
            id="select-monster-DEF"
            select={false}
            disabled={(
              mainDeckType === 'Spell Card' ||
              mainDeckType === 'Trap Card' ||
              mainDeckType === 'Skill Card' ||
              extraDeckType === 'Link Monster' ||
              (mainDeckType === '' && extraDeckType === '')
            )}
            label="DEF"
            type="number"
            value={def}
            onChange={handleDef}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    onClick={handleDefCompare}
                    disabled={(
                      mainDeckType === 'Spell Card' ||
                      mainDeckType === 'Trap Card' ||
                      mainDeckType === 'Skill Card' ||
                      extraDeckType === 'Link Monster' ||
                      (mainDeckType === '' && extraDeckType === '')
                    )}>
                    {defCompare === 1 ?
                      <TrendingUpRoundedIcon />
                      : (defCompare === -1 ?
                        <TrendingDownRoundedIcon />
                        : <ArrowRightAltRoundedIcon />)}
                  </IconButton>
                </InputAdornment>
              )
            }} />
        </form>
        <FormControl component="fieldset" className={classes.typeRadioStyles}>
          <FormLabel component="legend">Sort by</FormLabel>
          <RadioGroup name="Sort" value={sort} onChange={handleSort} row style={{ justifyContent: "center" }}>
            <FormControlLabel value="name" label="Name" control={<Radio color="primary"/>} />
            <FormControlLabel value="type" label="Type" control={<Radio color="primary"/>} />
            <FormControlLabel value="level" label="Level" control={<Radio color="primary"/>} />
            <FormControlLabel value="atk" label="ATK" control={<Radio color="primary"/>} />
            <FormControlLabel value="def" label="DEF" control={<Radio color="primary"/>} />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
}
export default CardsOptions;