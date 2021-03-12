import React, { Component } from 'react'

export default class Menus extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menus: []
        }
    }

    componentDidMount() {
        fetch('./menus.json')
            .then((response) => {
                return response.json();
            }).then((menus) => {
                this.setState({
                    menus: menus,
                })
            });
    }

    render() {
        return (
            <div>
                {this.state.menus.map((v, i) => {
                    return <div className={i}><a href="#">{v}</a></div>
                })
                }
            </div>
        )
    }
}
