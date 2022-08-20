import React from "react";
import { selectUser } from "../../../features/userSlice";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";

function SideBar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recent-item">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <img
        loading="lazy"
          src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
          alt="Avatar Background"
          className="sidebar__top-background"
        />
        <Avatar className="sidebar-avatar" src={user?.photoUrl} />
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <div className="sidebar__stat-number">2.543</div>
        </div>
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <div className="sidebar__stat-number">2.543</div>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("Programming")}
        {recentItem("Design")}
        {recentItem("ReactJS")}
        {recentItem("UX/UI Design")}
        {recentItem("Software")}
      </div>
    </aside>
  );
}

export default SideBar;
