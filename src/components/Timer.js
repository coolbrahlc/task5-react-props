import React, { Component } from 'react';


class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: '00',
            minutes: '00',
        }
    }

    tick =() =>{
        let min = Math.floor(this.secondsPassed / 60);
        let sec = this.secondsPassed - (min * 60);

        this.setState({
            minutes: min,
            seconds: sec,
        });

        if (sec < 10) {
            this.setState({
                seconds: "0" + this.state.seconds,
            })
        }

        if (min < 10) {
            this.setState({
                minutes: "0" + min,
            })
        }
        console.log(this.secondsPassed);
        this.secondsPassed++;

    };

    componentWillMount() {
        this.startCountDown();
        this.secondsPassed = 0;
    }

    componentWillUnmount() {
        //clearInterval(this.intervalHandle);
    }

    startCountDown = () => {
        //clearInterval(this.intervalHandle);
        console.log(this.secondsPassed);
        this.intervalHandle = setInterval(this.tick, 1000);
    };

    reset = () => {
        this.secondsPassed = 0;
        clearInterval(this.intervalHandle);
        this.setState({
            seconds: '00',
            minutes: '00',
        });
        this.startCountDown();
    };


    render() {
        return (
            <div>{this.props.show &&
                <h1 >{this.state.minutes}:{this.state.seconds}</h1>}
            </div>
        );
    }
}


export default Timer;
