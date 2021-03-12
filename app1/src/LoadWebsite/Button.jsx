import React from 'react'

export default class Button extends React.Component {
    render() {
        return <button
            className="btn btn-primary"
            onClick={this.props.handleClick}>
            {this.props.label}
            Что то написано
        </button>
    }
}