import React, { Component } from 'react';
import TimerInput from "./TimerInput";

class ResetButton extends React.Component {
    render() {
        return (
            <div style={{ marginLeft: 1 }}>

                <button className="btn" onClick={this.props.reset}>reset</button>
                <button className="btn" onClick={this.props.hide}>hide</button>
            </div>

        );
    }
}

export default ResetButton;