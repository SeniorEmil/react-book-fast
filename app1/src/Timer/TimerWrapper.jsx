import React, { Component } from 'react'
import ButtonComp from './ButtonComp'
import Timer from './Timer'
import Button from '@material-ui/core/Button'

export default class TimerWrapper extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            timeLeft: null,
            timer: null,
            timePause: false,
            beginTime: null
        }
        this.startTimer = this.startTimer.bind(this)
    }

    startTimer(timeLeft) {


        clearInterval(this.state.timer)
        this.setState({ beginTime: timeLeft })//нужен для reset

        let timer = setInterval(() => {
            let timeLeft = this.state.timeLeft - 1
            if (timeLeft == 0) clearInterval(timer)
            this.setState({ timeLeft: timeLeft })
            console.log(timer)
        }, 1000)


        return this.setState({
            timeLeft: timeLeft,
            timer: timer
        })
    }

    pauseTimer() {
        if (this.state.timeLeft) {
            clearInterval(this.state.timer)
            return this.setState({
                timePause: true
            })
        }
    }

    resumTimer() {
        if (this.state.timePause) {
            this.startTimer(this.state.timeLeft)
            return this.setState({ timePause: false })
        }
    }

    cancelTimer() {
        clearInterval(this.state.timer)
        this.setState({
            timeLeft: 0
        })
    }

    resetTimer() {
        if (this.state.beginTime) {
            clearInterval(this.state.timer)
            this.startTimer(this.state.beginTime)
        }
    }

    render() {
        const styles = {
            display: 'flex'
        }
        return (
            <div className="row-fluid">
                <h2>Timer</h2>
                <div className="btn-group" role="group" style={styles}>
                    <ButtonComp time="5" startTimer={this.startTimer} />
                    <ButtonComp time="10" startTimer={this.startTimer} />
                    <ButtonComp time="15" startTimer={this.startTimer} />
                    <Button onClick={this.pauseTimer.bind(this)}>Pause</Button>
                    <Button onClick={this.resumTimer.bind(this)}>Resum</Button>
                    <Button onClick={this.cancelTimer.bind(this)}>Cancel</Button>
                    <Button onClick={this.resetTimer.bind(this)}>Reset</Button>
                </div>
                <Timer timeLeft={this.state.timeLeft} />
            </div>
        )
    }
}