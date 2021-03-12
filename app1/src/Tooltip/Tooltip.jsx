import React, { Component } from 'react'
import ReactDOM from 'react'

export default class Tooltip extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            opacity: false,
            click: false
        }
    }

    toggle() {
        this.setState({
            opacity: !this.state.opacity,
        })
        
    }

    render() {
        const state = {
            opacity: +this.state.opacity
        }

        return (
            <div>
                <span onMouseOver={this.toggle} onMouseOut={this.toggle} onClick={this.toggle}>
                    {this.props.children}
                </span>
                <div className="tooltip" style={state}>{this.props.text}</div>
            </div>
        )
    }
}
