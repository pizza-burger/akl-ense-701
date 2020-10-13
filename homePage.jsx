import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function homePage() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Searcher</Link>
          </li>
          <li>
            <Link to="/about">Submitter</Link>
          </li>
          <li>
            <Link to="/dashboard">Moderator</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Searcher />
          </Route>
          <Route path="/Submitter">
            <Submitter />
          </Route>
          <Route path="/Moderator">
            <Moderator />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

//Please add the link to search page.
function Searcher() {
  return (
    <div>
      <h2>Searcher</h2>
    </div>
  );
}
//Please add link to submitter page.
function Submitter() {
  return (
    <div>
      <h2>Submitter</h2>
    </div>
  );
}
//Please add linkto moderator page.
function Moderator() {
  return (
    <div>
      <h2>Moderator</h2>
    </div>
  );
}