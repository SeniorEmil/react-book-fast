import React from 'react'
import Event2 from './Event2'
import Event3 from './Event3'

class Event1 extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            click: 0,
        }
    }

    handleClick(event) {
        this.setState({
            click: this.state.click + 1
        })
    }

    render() {
        return (
            <div>
                <Event2 handleClick={this.handleClick}/>
                <Event3 clickers={this.state.click}/>
            </div>
        )
    }
}

export default Event1