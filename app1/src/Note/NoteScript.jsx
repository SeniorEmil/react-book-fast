import { render } from "@testing-library/react"
import Note from './Note'


export default class NoteScript extends React.Component {
    constructor(props) {
        super(props)
        this.interval()
        this.state = {
            secondsLeft: 5
        }
    }

    interval() {
        setInterval(() => {
            if (this.state.secondsLeft == 0) {
                clearInterval(interval)
            } else {
                this.setState({
                    secondsLeft: this.state.secondsLeft - 1
                })
            }

        }, 1000)
    }



    render() {
        if (this.state.secondsLeft == 0) {
            return (
                <div>
                    Note was removed after {this.state.secondsLeft} seconds.
                </div>)
        } else {
            return (
                <div>
                    <Note secondsLeft={this.state.secondsLeft} />
                </div>
            )
        }

    }
}
