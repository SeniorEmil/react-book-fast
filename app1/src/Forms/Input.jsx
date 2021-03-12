import React, { Component } from 'react'
import InputRadio from './InputRadio'

export default class Input extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ""
        }
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleChangeForm(event) {
        console.log(event.target)
    }

    componentDidUpdate() {
        if (this.state.value == "lose") {
            this.setState({
                value: "false"
            })
        }
    }

    handleKeyUp(event) {
        if (event.keyCode == 83) {
            this.setState({
                value: "you top"
            })
        }
    }

    render() {
        return (
            <div>
                <input type="text" name="title" onChange={this.handleChange.bind(this)} value={this.state.value} />
                {console.log(this.state.value)}

                <form action="" onKeyUp={this.handleKeyUp.bind(this)}>
                    <input type="text" />
                    <button>submit</button>
                </form>
                <InputRadio />
            </div>
        )
    }
}
