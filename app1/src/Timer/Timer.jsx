import React from 'react'

export default function Timer(props) {
    if (!props.timeLeft) {
        return <div></div>
    } else {
        return (
            <div>
                Time: {props.timeLeft}
            </div>
        )
    }
}

