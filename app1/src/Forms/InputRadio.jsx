import React, { Component } from 'react'

export default class InputRadio extends Component {
    constructor(props) {
        super(props)
        this.handleRadio = this.handleRadio.bind(this)
        this.state = {
            radioGroup: {
                angular: false,
                react: true,
                polymer: false
            },
            description:""
        }
    }

    handleRadio(event) {
        let obj = {}
        obj[event.target.value] = event.target.checked
        this.setState({ radioGroup: obj })
    }

    handleTextArea(event){
        this.setState({
            description: event.target.value
        })
    }

    render() {
        return (
            <>
                <form action="">
                    <input
                        type="radio"
                        name="radioGroup"
                        value="Angular"
                        checked={this.state.radioGroup['angular']}
                        onChange={this.handleRadio} />
                    <input
                        type="radio"
                        name="radioGroup"
                        value="React"
                        checked={this.state.radioGroup['react']}
                        onChange={this.handleRadio} />
                    <input
                        type="radio"
                        name="radioGroup"
                        value="Polymer"
                        checked={this.state.radioGroup['polymer']}
                        onChange={this.handleRadio} />
                </form>
                <textarea name="description" value={this.state.description} onChange={this.handleTextArea.bind(this)} cols="30" rows="10"></textarea>
            </>
        )
    }
}
