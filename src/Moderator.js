import React from 'react';

class Moderator extends React.Component {
  render() {
    return (
      <div className="Moderator">
        <h1>Submit new Study</h1>
        <form>
          <label for="title">Title:</label><br />
          <input type="text" id="title" name="title"></input>
          <label for="author">Author:</label><br />
          <input type="text" id="author" name="author"></input>
        </form>
      </div>
    );
  }
};

export default Moderator;