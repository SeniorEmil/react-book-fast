import React, { Component } from 'react'
import Tooltip from './Tooltip'
import withHover from './withHover'

function Hovering(props) {
    return (
        <>
            <img
                height = '100 px'
                src="https://cdn.iconscout.com/icon/free/png-512/image-1767834-1502414.png"
                alt="ico"
            />
            {console.log(props.showTooltip)}
            {props.showTooltip == true ? <Tooltip /> : null}
        </>
    )
}


export default withHover(Hovering, 'showTooltip')