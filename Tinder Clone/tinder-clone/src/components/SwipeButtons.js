import React from "react";
import "../css/SwipeButton.css";
import ReplyIcon from "@material-ui/icons/Reply";
import CloseIcon from "@material-ui/icons/Close";
import StartRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlasOnButton from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";
const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplyIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StartRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlasOnButton fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
