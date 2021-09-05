import React from "react";
import "../css/Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";
const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img
        className="header__logo"
        // tender logo
        src="./images/tinder.png"
        alt="logo"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
};

export default Header;
