import React, { Component } from 'react'

export const Hoc = (Component) => {

    
class RedirectComponent extends React.Component {
        render() {
            let styles = {
                position:absolute,
                width: 200,
                height: 200,
                borderRadius: 1000,
                background: "black",
                position: "absolute",
                width: this.props.width,
                left: this.props.left,
            }
            

            return (
                <div style={styles}>
                    <Component {...this.props} />
                </div>
            )
        }
    }

    return RedirectComponent
    
}
