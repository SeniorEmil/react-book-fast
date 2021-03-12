import React, { Component } from 'react'

export default class Select extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedValue: 'node'
        }
    }

    handleChangeSelect(event) {
        this.setState({
            selectedValue: event.target.value
        })
    }
    render() {
        return (
            <div>
                <select
                    multiple={true}
                    value={[this.state.selectedValue, 'ruby']}
                    onChange={this.handleChangeSelect.bind(this)}>
                    <option value="ruby">Ruby</option>
                    <option value="php">PHP</option>
                    <option value="node">Node</option>
                </select>
            </div>
        )
    }
}
