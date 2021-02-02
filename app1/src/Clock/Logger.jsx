import React from 'react'

export default class Logger extends React.Component {
    constructor(props) {
        super(props)
        console.log('constructor')
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    componentDidMount(e) {
        console.log('componentDidMount');
        console.log('DOM node:')
    }

 

    componentWillUpdate(newProps, newState) {
        console.log('componentWillUpdate')
        console.log('newProps: ', newProps)
        console.log('newState: ', newState)
    }

    componentDidUpdate(oldProps, oldState) {
        console.log('componentDidUpdate')
        console.log('oldProps: ', oldProps)
        console.log('oldState: ', oldState)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render')
        return (
            <>
                {this.props.currentTime}
            </>
        )
    }
}