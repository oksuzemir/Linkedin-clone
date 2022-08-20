import React from "react";
import { auth } from "../../firebase/firebase";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Dropdown({ status }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => dispatch(logout()));
  };

  return (
    <div className={status ? "dropdown dropdown-active" : "dropdown pasif"}>
      <div className="dropdown__top">
        <Avatar src={user?.photoUrl} className="dropdown__avatar" />
        <div className="dropdown__top-info">
          <h3>{user?.displayName}</h3>
          <p>{user?.email}</p>
        </div>
        <div className="dropdown__top-btn">
          <p>View Profile</p>
        </div>
      </div>
      <div className="dropdown__lists">
        <div className="dropdown__lists-account">
          <h4>Account</h4>
          <ul>
            <li>Settings & Privacy</li>
            <li>Help</li>
            <li>Language</li>
          </ul>
        </div>
        <div className="dropdown__lists-manage">
          <h4>Manage</h4>
          <ul>
            <li>Post & Activity</li>
            <li>Job Posting Account</li>
          </ul>
        </div>
        <div className="dropdown__lists-exit">
          <p onClick={signOut}>Sign Out</p>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
