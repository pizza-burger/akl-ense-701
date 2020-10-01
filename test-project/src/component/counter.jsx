import React, { Component } from 'react';

class Counter extends Component {
state = {
    count: 1
};

styles = {
    fontSize: 50,
    fontWeight: "bold"
};

    render() {
        return(
            <div>
                <textarea></textarea>
                <label></label>
                <span style={this.style} className="badge badge-primary m-2">
                    {this.state.count}
                    </span>
                <button className="btn btn-secoundary btn-sm">Increment</button>
                <button className="btn btn-secoundary btn-sm">Increment</button>
            </div>
        );

    }
}

export default Counter;