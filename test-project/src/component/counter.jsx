import React, { Component } from 'react';
import { createPopper } from'@popperjs/core';

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
                <label>Description:</label>
                <textarea placeholder="Search"></textarea>
                <label>Dates:</label>
                <textarea></textarea>
                <label> to </label>
                <textarea></textarea>
                <label>Filters:</label>
                createPopper<Dropdown>
                    <Dropdown.Toggle>
                        test
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>1</Dropdown.Item>
                        <Dropdown.Item>2</Dropdown.Item>
                        <Dropdown.Item>3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

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