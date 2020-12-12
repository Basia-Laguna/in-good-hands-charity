import Home from "./components/home/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/registration/Register";
import Donate from "./components/donate/Donate";
import Logout from "./components/logout/Logout";
import {
  DONATE_PAGE,
  LOGIN_PAGE,
  LOGOUT_PAGE,
  REGISTER_PAGE,
  HOME_PAGE,
} from "./paths/paths";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={HOME_PAGE}>Home</Link>
            </li>
            <li>
              <Link to={LOGIN_PAGE}>Zaloguj się</Link>
            </li>
            <li>
              <Link to={REGISTER_PAGE}>Zarejestruj się</Link>
            </li>
            <li>
              <Link to={DONATE_PAGE}>Oddaj rzeczy</Link>
            </li>
            <li>
              <Link to={LOGOUT_PAGE}>Wyloguj</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path={LOGIN_PAGE}>
            <Login />
          </Route>
          <Route path={REGISTER_PAGE}>
            <Register />
          </Route>
          <Route path={DONATE_PAGE}>
            <Donate />
          </Route>
          <Route path={LOGOUT_PAGE}>
            <Logout />
          </Route>
          <Route path={HOME_PAGE}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    // <div className="">
    //   <Home />
    // </div>
  );
}

export default App;
