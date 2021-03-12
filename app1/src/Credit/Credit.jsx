import React, { Component } from 'react'

export default class Credit extends Component {
    constructor(props) {
        super(props)
        this.handleHange = this.handleHange.bind(this)
        this.state = {
             value:""
        }
    }

    handleHange(event){
        this.setState({
            value: event.target.value.replace(/[^0-9]/ig, '')
        })
    }
    
    render() {
        return (
            <>
             <input type="text" placeholder="1-9" value={this.state.value} onChange={this.handleHange.bind(this)}/>
             <br/>
             <span>{this.state.value.length>0?'You entered: ' + this.state.value : ''}</span>
            </>
        )
    }
}
