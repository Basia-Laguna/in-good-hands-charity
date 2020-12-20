import React from "react";
import Decoration from "../../assets/Decoration.svg";
import Signature from "../../assets/Signature.svg";
import People from "../../assets/People.jpg";

function HomeAboutUs(props) {
  return (
    <>
      <div className="about-us-container">
        <div className="about-us">
          <div className="about-us-text">
            <div className="about-us-text-header">
              <p>O nas</p>
              <img src={Decoration} className="decoration" />
            </div>

            <div className="about-us-text-block">
              <p className="about-us-text-block-content">
                Nori grape silver beet broccoli kombu beet greens fava bean
                potato quandong celery. Bunya nuts black-eyed pea praire turnip
                leek lentil turnip greens parsnip
              </p>
            </div>
            <div className="signature-container">
              <p>
                <img src={Signature} className="signature" />
              </p>
            </div>
          </div>
          <div className="about-us-image">
            <img src={People} className="about-us-image-people" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeAboutUs;
