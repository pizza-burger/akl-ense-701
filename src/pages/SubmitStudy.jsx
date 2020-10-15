import React from 'react';

class SubmitStudy extends React.Component {
  render() {
    return (
      <div className="SubmitStudy">
        <h1>Submit new Study</h1>
        <form>
          <table>
            <tr>
              <td><label for="title">Title: </label></td>
              <td><input type="text" id="title" name="title"></input></td>
            </tr>
            <tr>
              <td><label for="author">Author: </label></td>
              <td><input type="text" id="author" name="author"></input></td>
            </tr>
          </table>
        </form>
        <button type="submit">Submit</button>
      </div>
    );
  }
};

export default SubmitStudy;