import { useHistory } from "react-router-dom";
import * as Scroll from "react-scroll";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";

import {
  DONATE_PAGE,
  LOGIN_PAGE,
  LOGOUT_PAGE,
  REGISTER_PAGE,
} from "../paths/paths";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import {
  HOME_HEADER,
  HOME_THREE_COLUMNS,
  HOME_FOUR_STEPS,
  HOME_ABOUT_US,
  HOME_INSTITUTIONS,
  HOME_CONTACT,
} from "../paths/scrollTargets";

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
      <div className="navigation-bar">
        <nav>
          {/* <Link to={HOME_PAGE}>Home</Link> */}
          <ul>
            <li>
              <RouterLink to={LOGIN_PAGE}>Zaloguj się</RouterLink>
            </li>

            <li>
              <RouterLink to={REGISTER_PAGE}>Załóz konto</RouterLink>
            </li>

            <li>
              <RouterLink to={DONATE_PAGE}>Oddaj rzeczy</RouterLink>
            </li>

            <li>
              <RouterLink to={LOGOUT_PAGE}>Wyloguj</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="home-nav-main-menu-container">
        <div className="home-nav-main-menu">
          <Link
            activeClass="active"
            to={HOME_HEADER}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
          >
            Start
          </Link>
          <Link
            activeClass="active"
            to={HOME_FOUR_STEPS}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
          >
            O co chodzi?
          </Link>
          <Link
            activeClass="active"
            to={HOME_ABOUT_US}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
          >
            O nas
          </Link>
          <Link
            activeClass="active"
            to={HOME_INSTITUTIONS}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
          >
            Fundacje i organizacje
          </Link>
          <Link
            activeClass="active"
            to={HOME_CONTACT}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
          >
            Kontakt
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
