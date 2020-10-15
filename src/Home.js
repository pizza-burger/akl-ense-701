import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SubmitStudy from "./pages/SubmitStudy.jsx";
import Moderator from "./pages/Moderator.jsx";
import Searcher from "./pages/Searcher.jsx";

function Home() {
  return (
    <Router>
      <h1>SEER MENU</h1>
      <div>
        <ul>
          <li>
            <Link to="/">Searcher</Link>
          </li>
          <li>
            <Link to="/submit">Submit</Link>
          </li>
          <li>
            <Link to="/moderator">Moderator</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Searcher />
          </Route>
          <Route path="/submit">
            <SubmitStudy />
          </Route>
          <Route path="/moderator">
            <Moderator />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Home;