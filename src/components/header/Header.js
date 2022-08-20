import React, { Suspense, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const HeaderOption = React.lazy(() => import("./HeaderOption"));
const DropDown = React.lazy(() => import("./DropDown"));

const Header = () => {
  const user = useSelector(selectUser);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header">
      <div className="container flex">
        <div className="header__left">
          <a href="/">
            <img
              loading="lazy"
              src="https://image.flaticon.com/icons/png/512/174/174857.png"
              alt="LinkedIn Logo"
              height="34"
            />
          </a>
          <div className="header__search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <nav className="header__right">
          <Suspense fallback={null}>
            <HeaderOption Icon={HomeIcon} title="Home" />
          </Suspense>
          <Suspense fallback={null}>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          </Suspense>
          <Suspense fallback={null}>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          </Suspense>
          <Suspense fallback={null}>
            <HeaderOption Icon={ChatIcon} title="Messaging" />
          </Suspense>
          <Suspense fallback={null}>
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          </Suspense>
          <Suspense fallback={null}>
            <HeaderOption
              avatar={user?.photoUrl}
              title="Me"
              status={toggle}
              changeStatus={setToggle}
            />
          </Suspense>
          <Suspense fallback={null}>
            <DropDown status={toggle} />
          </Suspense>
        </nav>
      </div>
    </div>
  );
};

export default Header;
