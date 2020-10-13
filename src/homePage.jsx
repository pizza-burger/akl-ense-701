import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SubmitStudy from "/pages/SubmitStudy.js";

export default function homePage() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Searcher</Link>
          </li>
          <li>
            <Link to="/submit">Submit</Link>
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
          <Route path="/submit">
            <SubmitStudy />
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
function SubmitStudy() {
  return (
    <SubmitStudy />
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