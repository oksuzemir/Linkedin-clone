import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function LoginFooter() {
  return (
    <footer className="footer">
      <div className="footer__icon">
        <img
        loading="lazy"
          width="56"
          src="https://brandlogos.net/wp-content/uploads/2020/11/linkedin-logo-512x512.png"
          alt="LinkedIn Icon"
        />
        <span>© 2021</span>
      </div>
      <ul className="footer__list">
        <li>User Agreement</li>
        <li>Privacy Policy</li>
        <li>Community Guidelines</li>
        <li>Cookie Policy</li>
        <li>Copyright Policy</li>
        <li>Send Feedback</li>
        <li>
          Language <ExpandMoreIcon fontSize="small"/>
        </li>
      </ul>
    </footer>
  );
}

export default LoginFooter;
