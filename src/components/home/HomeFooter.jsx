import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function HomeFooter(props) {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <div className="footer-box">
            <p className="footer">Copyright by Coders Lab</p>
          </div>
          <div className="footer-box-icons">
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeFooter;
