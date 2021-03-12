import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

export default class ButtonComp extends Component {


    render() {
        return (
            <div>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={()=>{this.props.startTimer(this.props.time)}}
                >
                    {this.props.time} sec
                </Button>
            </div>
        )
    }
}

