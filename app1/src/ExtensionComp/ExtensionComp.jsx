import React, { Component } from 'react'
import Script from './Script'

export default class ExtensionComp extends Component {
    render() {
        let num = 1
        return (
            <div>
                <Script buttonLabel={num} />
            </div>
        )
    }
}