import React from "react";
import HeaderOption from "../header/HeaderOption";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

function FixedOptions() {
  return (
    <div className="fixed__options">
      <HeaderOption Icon={HomeIcon} title="Home" />
      <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
      <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
      <HeaderOption Icon={ChatIcon} title="Messaging" />
      <HeaderOption Icon={NotificationsIcon} title="Notifications" />
    </div>
  );
}

export default FixedOptions;
