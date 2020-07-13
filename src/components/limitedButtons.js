import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { green, lime, orange, red } from '@material-ui/core/colors';
import NoEncryptionOutlinedIcon from '@material-ui/icons/NoEncryptionOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';

const UnlimitedButton = withStyles({
  root: {
    color: '#fff',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
})(Button);
const SemiLimitedButton = withStyles({
  root: {
    color: '#fff',
    backgroundColor: lime[700],
    '&:hover': {
      backgroundColor: lime[900],
    },
  },
})(Button);
const LimitedButton = withStyles({
  root: {
    color: '#fff',
    backgroundColor: orange[700],
    '&:hover': {
      backgroundColor: orange[900],
    },
  },
})(Button);
const BanButton = withStyles({
  root: {
    color: '#fff',
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
})(Button);

const handleTCGClick = () => {
  window.open("https://db.ygoprodeck.com/banlist/?list=TCG");
}
const handleOCGClick = () => {
  window.open("https://db.ygoprodeck.com/banlist/?list=OCG");
}

const limitedButtons = banlist_info => {
  let tcg, ocg, temp;
  if (banlist_info) {
    temp = banlist_info.ban_tcg;
    switch (temp) {
      case "Banned":
        tcg = <BanButton
          variant="contained"
          startIcon={<BlockOutlinedIcon />}
          onClick={() => handleTCGClick}>
          TCG Banned
            </BanButton>;
        break;
      case "Limited":
        tcg = <LimitedButton
          variant="contained"
          startIcon={<LockOutlinedIcon />}
          onClick={() => handleTCGClick}>
          TCG Limited
            </LimitedButton>;
        break;
      case "Semi-Limited":
        tcg = <SemiLimitedButton
          variant="contained"
          startIcon={<LockOpenOutlinedIcon />}
          onClick={() => handleTCGClick}>
          TCG Semi-Limited
            </SemiLimitedButton>;
        break;
      default:
        tcg = <UnlimitedButton
          variant="contained"
          startIcon={<NoEncryptionOutlinedIcon />}
          onClick={() => handleTCGClick}>
          TCG Unlimited
            </UnlimitedButton>;
        break;
    };
    temp = banlist_info.ban_ocg;
    switch (temp) {
      case "Banned":
        ocg = <BanButton
          variant="contained"
          startIcon={<BlockOutlinedIcon />}
          onClick={() => handleOCGClick}>
          OCG Banned
            </BanButton>;
        break;
      case "Limited":
        ocg = <LimitedButton
          variant="contained"
          startIcon={<LockOutlinedIcon />}
          onClick={() => handleOCGClick}>
          OCG Limited
            </LimitedButton>;
        break;
      case "Semi-Limited":
        ocg = <SemiLimitedButton
          variant="contained"
          startIcon={<LockOpenOutlinedIcon />}
          onClick={() => handleOCGClick}>
          OCG Semi-Limited
            </SemiLimitedButton>;
        break;
      default:
        ocg = <UnlimitedButton
          variant="contained"
          startIcon={<NoEncryptionOutlinedIcon />}
          onClick={() => handleOCGClick}>
          OCG Unlimited
            </UnlimitedButton>;
        break;
    }
  } else {
    tcg = <UnlimitedButton
      variant="contained"
      startIcon={<NoEncryptionOutlinedIcon />}
      onClick={() => handleTCGClick()}>
      TCG Unlimited
        </UnlimitedButton>;
    ocg = <UnlimitedButton
      variant="contained"
      startIcon={<NoEncryptionOutlinedIcon />}
      onClick={() => handleOCGClick()}>
      OCG Unlimited
        </UnlimitedButton>;
  }
  return (
    <>
      {tcg}
      {ocg}
    </>
  );
};

export default limitedButtons;