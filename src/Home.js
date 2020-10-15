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


/**const {MongoClient} = require('mongodb');

async function createDB(){
  const uri = "mongodb+srv://maaka:123@cluster0.uontj.mongodb.net/Cluster0?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
      await  listDatabases(client);

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

//createDB().catch(console.error);

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  Teststring = databasesList.testDB.find({"TestName": "Maaka"});
};*/

function Home() {
  //createDB();
  console.log('hi');
  return (
    <Router>
      <h1>SEER MENU</h1>
      <p id="demo"></p>
        <script>
          const Tstring = "HI";
          document.getElementById("demo").innerHTML = Tstring;
        </script>
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