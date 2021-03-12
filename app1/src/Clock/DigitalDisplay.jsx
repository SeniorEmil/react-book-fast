import React from 'react';

class DigitalDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nam: 0,
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            nam: ((newProps.num % 2) == 0) ? 1 : 0
        })
    }

    render() {
        return (
            <>
                {this.props.currentTime}
                {this.state.nam}
            </>
        )
    }
}

export default DigitalDisplay;