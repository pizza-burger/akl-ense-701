import React from 'react';

class Moderator extends React.Component {
  render() {
    return (
      <div className="Moderator">
        <h1>Submit new Study</h1>
        <form>
        
          <label for="title">Title:</label>
          <input type="text" id="title" name="title"></input><br /><br />
          <label for="Denied">Denied:</label>
          <div class="dropdown">
            <ul class="dropdown-menu">
              <li><a href="#">case1</a></li>
              <li><a href="#">case2</a></li>
              <li><a href="#">case3</a></li>
            </ul>
          </div>
          <button type="up">^</button>
          <button type="down">V</button><br />
          <label for="Pending">Pending:</label>
          <div class="dropdown">
            <ul class="dropdown-menu">
              <li><a href="#">case1</a></li>
              <li><a href="#">case2</a></li>
              <li><a href="#">case3</a></li>
            </ul>
          </div>
          <button type="up">^</button>
          <button type="down">V</button><br />
          <label for="Approved">Approved:</label>
          <div class="dropdown">
            <ul class="dropdown-menu">
              <li><a href="#">case1</a></li>
              <li><a href="#">case2</a></li>
              <li><a href="#">case3</a></li>
            </ul>
          </div><br />
          <button type="conform">conform</button>
        </form>
      </div>
    );
  }
};

export default Moderator;