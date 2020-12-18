import React from "react";
import Decoration from "../../assets/Decoration.svg";
import Signature from "../../assets/Signature.svg";
import People from "../../assets/People.jpg";

function HomeAboutUs(props) {
  return (
    <>
      <div className="about-us-container">
        <div className="about-us-text"></div>
        <p className="about-us-text-header">O nas</p>
        <p>
          <img src={Decoration} className="decoration" />
        </p>
        <div className="about-us-text-content">
          <p>
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea praire turnip leek lentil
            turnip greens parsnip
          </p>
          <p>
            <img src={Signature} className="signature" />
          </p>
        </div>
        <div className="about-us-image">
          <img src={People} className="abput-us-image-people" />
        </div>
      </div>
    </>
  );
}

export default HomeAboutUs;
