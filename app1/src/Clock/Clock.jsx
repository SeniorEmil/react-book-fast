import React from 'react';
import DigitalDisplay from './DigitalDisplay';
import AnalogDisplay from './AnalogDisplay';
import Logger from './Logger';

export default class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.launchClock()

        this.state = {
            currentTime: (new Date()).toLocaleString(),
            num: 0
        }
    }

    launchClock() {
        setInterval(() => {
            this.setState({
                currentTime: (new Date()).toLocaleString(),
                num: this.state.num+1
            })
        }, 1000)
    }


    render() {
        return (
            <>
                <div className="clock">
                    <DigitalDisplay currentTime={this.state.currentTime} num = {this.state.num} />
                    <AnalogDisplay />
                    <Logger currentTime={this.state.currentTime} />
                </div>
            </>
        )
    }
}