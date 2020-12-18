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
import NavHeader from "./components/NavHeader";

function App() {
  return (
    <Router>
      <div>
        <NavHeader />
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
