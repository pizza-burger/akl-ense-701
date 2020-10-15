import React from 'react';

class Searcher extends React.Component {
  render() {
    return (
      <div className="Searcher">
        <h1>Search for a Paper</h1>
        <form>
          <label for="description">Description: </label>
          <input type="text" id="description" name="description"></input><br /><br />

          <label for="Sdate">Start Date: </label>
          <input type="date" id="Sdate" name="Sdate"></input>
          to
          <label for="Edate"> End Date: </label>
          <input type="date" id="Edate" name="Edate"></input><br />
        </form><br />
        <button type="Search">Search</button>
      </div>
      
    );
  }
};

export default Searcher;