import React from 'react'
import Event1 from '../EventsHandleClick/Event1'
import Script from './Script'
import './radio.css'

export default class Event extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {  
        return (
            <>
                <Script name="radio-group" id="radio1" order="1" label="Credit card" />
                <Script name="radio-group" id="radio2" order="2" label="PayPal" />
                <Script name="radio-group" id="radio3" order="3" label="Check" />
            </>
        )
    }
}

