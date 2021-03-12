import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Script extends Component {
    render() {
        return (
            <div>
                <button>{this.props.buttonLabel}</button>
            </div>
        )
    }
}

Script.propTypes={
    buttonLabel: PropTypes.string, 
}
Script.defaultProps = { buttonLabel: "submit" }

