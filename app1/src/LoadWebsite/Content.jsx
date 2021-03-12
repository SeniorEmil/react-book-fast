import React from 'react'
import LoadWebsite from './LoadWebsite'
import Button from './Button'

const EnhancedButton = LoadWebsite(Button)

export default class Content extends React.Component {
    render() {
        return (
            <div>
                <EnhancedButton />
                <br />
                <br />
                <iframe id="frame" src="" width="600" height="500" />
            </div>
        )
    }
}