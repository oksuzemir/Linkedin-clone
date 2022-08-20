import React from "react";
import { Avatar } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { SignalCellularNullSharp } from "@material-ui/icons";

const HeaderOption = ({ avatar, title, Icon, status, changeStatus }) => {
  return (
    <div
      className="header__option"
      onClick={() =>
        title === "Me" ? changeStatus(!status) : SignalCellularNullSharp
      }
    >
      {Icon && <Icon className="header__option-icon" />}
      {avatar && (
        <Avatar
          className={
            status
              ? "header__option-icon avatar anim"
              : "header__option-icon avatar"
          }
          src={avatar}
        />
      )}
      {avatar == undefined && title === "Me" && (
        <Avatar className="def-avatar" />
      )}
      {avatar === "" && title === "Me" && <Avatar className="def-avatar" />}
      {title === "Me" ? (
        <div className="header__option-dropdown">
          <h3 className="header__option-title">{title}</h3>
          <ArrowDropDownIcon />
        </div>
      ) : (
        <h3 className="header__option-title">{title}</h3>
      )}
    </div>
  );
};

export default HeaderOption;
