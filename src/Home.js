import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SubmitStudy from "./pages/SubmitStudy.js";
import Moderator from "./Moderator.js";
import Searcher from "./Searcher.js";

function Home() {
  return (
    <Router>
      <div>Hello!</div>
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