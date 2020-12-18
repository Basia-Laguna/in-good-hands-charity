// *FOUR STEPS*

import React from "react";
import Decoration from "../../assets/Decoration.svg";
import Icon1 from "../../assets/Icon-1.svg";
import Icon2 from "../../assets/Icon-2.svg";
import Icon3 from "../../assets/Icon-3.svg";
import Icon4 from "../../assets/Icon-4.svg";

function HomeFourSteps(props) {
  //   return <div>HomeFourSteps</div>;
  // }
  return (
    <>
      {/* HEADER */}
      <div className="four-steps-header-container">
        <div className="four-steps-header-text">
          <p>Wystarczą 4 proste kroki</p>
          <img src={Decoration} classname="decoration" />
        </div>
      </div>

      {/* COLUMNS */}
      <div className="four-steps-container">
        <div className="four-steps-columns">
          <div className="four-columns">
            <img className="four-columns-icon" src={Icon1} />
            <h2 className="four-columns-step-name">Wybierz rzeczy</h2>
            <p className="four-columns-line"></p>
            <p className="four-columns-step-details" s>
              ubrania, zabawki, sprzęt i inne
            </p>
          </div>
          <div className="four-columns">
            <img className="our-columns-icon" src={Icon2} />
            <h2 className="four-columns-step-name">Spakuj je</h2>
            <p className="four-columns-line"></p>
            <p className="four-columns-step-details">
              skorzystaj z worków na śmieci
            </p>
          </div>
          <div className="four-columns">
            <img className="our-columns-icon" src={Icon3} />
            <h2 className="four-columns-step-name">
              Zdecyduj komu chcesz pomóc
            </h2>
            <p className="four-columns-line"></p>
            <p className="four-columns-step-details">wybierz zaufane miejsce</p>
          </div>
          <div className="four-columns">
            <img className="our-columns-icon" src={Icon4} />
            <h2 className="four-columns-step-name">Zamów kuriera</h2>
            <p className="four-columns-line"></p>
            <p className="four-columns-step-details">
              kurier przyjedzie w dogodnym terminie
            </p>
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="four-steps-button-container">
        <button className="button four-steps-button">
          ODDAJ <br /> RZECZY
        </button>
      </div>
    </>
  );
}

export default HomeFourSteps;
