import React, { Component } from 'react'

export default class Movement extends Component {
    constructor(props) {
        super(props)
        this.handleOnKeyPress = this.handleOnKeyPress.bind(this)
        this.state = {
            top: 100,
            left: 100,
        }
    }

    componentDidMount() {
        window.addEventListener('keypress', this.handleOnKeyPress)
    }
    componentWillUnmount() {
        window.removeEventListener('keypress', this.handleOnKeyPress)
    }

    handleOnKeyPress(event) {
        let _keyCode = event.keyCode
        switch (_keyCode) {
            case 119: this.setState({
                top: this.state.top - 2,
            })
            break;
            case 115: this.setState({
                top: this.state.top + 2,
            })
            break;
            case 97: this.setState({
                left: this.state.left - 2,
            })
            break;
            case 100: this.setState({
                left: this.state.left + 2,
            })
            break;
        }
        console.log(event.keyCode)
    }


    render() {

        let styles = {
            width: 200,
            height: 200,
            background: "black",
            position: "absolute",
            top: this.state.top,
            left: this.state.left,
        }

        return (
            <>
                <div style={styles}>
                </div>
                <div>
                    top:{this.state.top}
                    <br />
                    letft: {this.state.left}
                </div>
            </>
        )
    }
}
