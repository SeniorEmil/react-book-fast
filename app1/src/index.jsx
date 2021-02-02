import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import Clock from './Clock/Clock';
import User from './User/User';

let dataUrl = 'https://vk.com/doc231356701_584848530?hash=4a54a9edf12dfb2b9f&dl=b076ca34d77545ab11'

ReactDOM.render(
  <>
    <Hello name="Emil" />

    <User data-url={dataUrl} />
  </>,
  document.getElementById('root')
);


