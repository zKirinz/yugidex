import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  IconButton,
  Link
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MillenniumPuzzleIcon from '../assets/images/MillenniumPuzzleIcon.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
  titleStyles: {
    marginLeft: '4px',
    cursor: 'default',
  },
  logoStyles: {
    width: '48px',
  },
  facebookIconStyles: {
    fontSize: '32px',
  },
  githubIconStyles: {
    fontSize: '28px',
  },
  instagramIconStyles: {
    fontSize: '32px',
  }
})

const Header = (props) => {
  const handleFaceBookClick = () => {
    window.open("https://www.facebook.com/kien123456k");
  }
  const handleGithubClick = () => {
    window.open("https://github.com/kien123456k");
  }
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/kien_tran151101/");
  }
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary">
      <Toolbar style={{ paddingRight: '12px' }}>
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
          className={classes.logoStyles}
          elevation={0}
          square
        />
        <Typography style={{ flexGrow: '1' }} />
        <IconButton onClick={handleFaceBookClick}>
          <FacebookIcon className={classes.facebookIconStyles} />
        </IconButton>
        <IconButton onClick={handleGithubClick}>
          <GitHubIcon className={classes.githubIconStyles} />
        </IconButton>
        <IconButton onClick={handleInstagramClick}>
          <InstagramIcon className={classes.instagramIconStyles} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export default Header;