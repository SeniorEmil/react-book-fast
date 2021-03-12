import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import DoneLink from './ExtensionComp/DoneLink'
import Hovering from './HighOrder/Hovering'
import Content from './LoadWebsite/Content'
import Menus from './Menu/Menus.jsx'
import Tooltip from './Tooltip/Tooltip'
import Timer from './Timer/TimerWrapper'
import WebPackForm from './WebPackForm/Form'

import './style.css'

ReactDOM.render(

  <>
    <Hello name="Emil" />
    <Tooltip children={"lorem ipum text"} text={"eto riba"} />
    <Timer />
  </>,
  document.getElementById('root')
);


