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
      <div className="header-container">
        {/* <div
          className="header-picture"
          style={{ backgroundImage: `url(${HomeHero})` }}
        /> */}
        <img className="header-picture" src={HomeHero} />
        <div className="header-textbox-container">
          <div className="header-textbox">
            <p>Zacznij pomagać!</p>
            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
            <p>
              <img src={Decoration} classname="decoration" />
            </p>
          </div>
          <div className="nav-btns">
            <button className="nav-btn donate-btn" onClick={handleClick}>
              ODDAJ <br />
              RZECZY
            </button>
            <button
              className="nav-btn organise-btn"
              onClick={() => {
                handleClick();
              }}
            >
              ZORGANIZUJ <br />
              ZBIÓRKĘ
            </button>
          </div>
        </div>
      </div>
    </>

    // <>
    //   {/* *HEADER* */}
    //   <div className="header-container">
    //     <div className="header-opacity">
    //       {/* IMAGE */}
    //       <div
    //         className="header-picture"
    //         style={{ backgroundImage: `url(${HomeHero})` }}
    //       >
    //         {/* TEXT & BUTTONS */}
    //         <div className="header-textbox-container">
    //           <div className="header-textbox">
    //             <p>Zacznij pomagać!</p>
    //             <p>Oddaj niechciane rzeczy w zaufane ręce</p>
    //             <p>
    //               <img src={Decoration} classname="decoration" />
    //             </p>
    //           </div>
    //           <div className="nav-btns">
    //             <button className="nav-btn donate-btn" onClick={handleClick}>
    //               ODDAJ <br />
    //               RZECZY
    //             </button>
    //             <button
    //               className="nav-btn organise-btn"
    //               onClick={() => {
    //                 handleClick();
    //               }}
    //             >
    //               ZORGANIZUJ <br />
    //               ZBIÓRKĘ
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}

export default HomeHeader;
