import React, { Component } from 'react';
import Timer from "./components/Timer.js";
import StartButton from "./components/StartButton.js";
import ResetButton from "./components/ResetButton.js";
import './App.sass';
import './index.sass';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.Timer = React.createRef();

        this.state = {
            show: true,
        }
    }

    hide = () => {
        console.log(this.state.show);
        this.setState({
            show: !this.state.show,
        });
    };

    reset = () => {
        this.Timer.current.reset();

    };

    render() {
            return (
                <div>
                    {<Timer
                        ref={this.Timer}
                        show={this.state.show}
                    />}
                    <ResetButton
                        reset={this.reset}
                        hide={this.hide}
                    />
                </div>
            );
        }
}

export default App;
