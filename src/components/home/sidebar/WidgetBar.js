import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function WidgetBar() {
  const newArticle = (heading, subtitle) => (
    <div className="widgetbar__article">
      <div className="widgetbar__article-left">
        <FiberManualRecordIcon />
      </div>
      <div className="widgetbar__article-right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgetbar">
      <div className="widgetbar__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticle("LinkedIn Clone", "Top news - 999 readers")}
      {newArticle("CoronaVirus Variants", "Top news - 873 readers")}
      {newArticle("Bitcoin Breakas $40k", "Crypto - 1073 readers")}
      {newArticle("Is Google Firebase good?", "Software - 1474 readers")}
      {newArticle("Babel New Version", "Software - 274 readers")}
        <footer className="widgetbar__footer">
          <ul className="footer__list">
            <li className="footer__list-item">About</li>
            <li className="footer__list-item">Accesibility</li>
            <li className="footer__list-item">Help Center</li>
            <li className="footer__list-item">
              Privacy & Terms
              <ExpandMoreIcon />
            </li>
            <li className="footer__list-item">Ad Choices</li>
            <li className="footer__list-item">Advertising</li>
            <li className="footer__list-item">
              Bussines Services
              <ExpandMoreIcon />
            </li>
            <li className="footer__list-item">Get the LinkedIn app</li>
            <li className="footer__list-item">More</li>
          </ul>
          <div className="footer__copyright">
            <img
            loading="lazy"
              width="56"
              src="https://brandlogos.net/wp-content/uploads/2020/11/linkedin-logo-512x512.png"
              alt="LinkedIn Logo"
            />
            <span>LinkedIn Corporation © 2021</span>
          </div>
        </footer>
    </div>
  );
}

export default WidgetBar;
