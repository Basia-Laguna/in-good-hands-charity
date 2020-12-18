import { useHistory } from "react-router-dom";

import { LOGIN_PAGE } from "../../paths/paths";

import Decoration from "../../assets/Decoration.svg";

import HomeHero from "../../assets/Home-Hero-Image.jpg";

function HomeHeader(props) {
  let history = useHistory();

  function handleClick() {
    history.push(LOGIN_PAGE);
  }

  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <>
      {/* <div className="header-image">
        <div className="hero-image"></div>
      </div> */}
      <div className="header-container">
        <div
          className="header-textbox"
          style={{ backgroundImage: `url(${HomeHero})` }}
        >
          <div>
            <p>Zacznij pomagać!</p>
            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
            <p>
              <img src={Decoration} classname="decoration" />
            </p>
          </div>
          <div className="nav-btns">
            <button className="nav-btn donate-btn" onClick={handleClick}>
              ODDAJ RZECZY
            </button>
            <button
              className="nav-btn organise-btn"
              onClick={() => {
                handleClick();
              }}
            >
              ZORGANIZUJ ZBIÓRKĘ
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
