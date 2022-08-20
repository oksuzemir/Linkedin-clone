import React from "react";

function RedirectLoad() {
  return (
    <div className="redirect">
      <img
        loading="lazy"
        src="https://brandlogos.net/wp-content/uploads/2020/11/linkedin-logo-512x512.png"
        alt="LikedIn Logo"
        className="redirect__logo"
      />
      <div className="progress-bar">
        <div className="progress-bar-value"></div>
      </div>
    </div>
  );
}

export default RedirectLoad;
