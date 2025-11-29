import "./f.css";

import log from "../../assets/logo.png";
import cos from "../../assets/us3.webp";
import cos2 from "../../assets/us4.webp";

const Footer = () => {
  return (
    <div className="fook">
      <div className="coupler">
        <img src={cos} alt="" className="cop lll" />
      </div>{" "}
      <div className="coupler2">
        <img src={cos2} alt="" className="cop ll" />
      </div>
      <div className="footer">
        <img src={log} alt="" className="logo" />
        <h2 className="footer_title">O’Neill + Rachel</h2>

        <h2 className="wedding_details">wedding details</h2>

        <p className="wedding_p">
          <a
            href="https://www.chateaunouvelle.com/"
            target="_blank"
            style={{ color: "inherit" }}
          >
            Chateau Nouvelle
          </a>
        </p>
      </div>
      <div className="fook_btn">© 2025 O’neill & Rachel   . All rights reserved.</div>
    </div>
  );
};

export default Footer;
