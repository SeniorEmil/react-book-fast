import React, { Component } from 'react'

export default class DoneLink extends Component {
    render() {
        return (
            <a {...this.props}>
                <span class="glyphicons glyphicons-check"></span>
                {this.props.children}
            </a>
        )
    }
}
