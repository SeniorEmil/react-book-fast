import React from 'react'

export default function withHover(Component, propName = 'hovering') {
    return class withHover extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                hovering: false
            }
        }

        mouseOver = () => { this.setState({ hovering: true }) }
        mouseOut = () => { this.setState({ hovering: false }) }

        render() {

            const props = {
                [propName]: this.state.hovering
            }

            let styles = {
                width: 'auto',
                height: 'auto'
            }

            return (
                <div
                    style = {styles}
                    onMouseOver={this.mouseOver}
                    onMouseOut={this.mouseOut}
                >
                    <Component  {...props} />
                </div>
            )
        }
    }
}