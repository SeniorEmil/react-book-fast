import React from 'react'

class Event2 extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handleClick}>click me</button>
            </div>
        )
    }
}

export default Event2