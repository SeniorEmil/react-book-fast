import { fireEvent } from "@testing-library/react"

import React from 'react'

const ClickCounterButton = (props) => {

    return (
        <h1>{props.clickers}</h1>
    )

}

export default ClickCounterButton