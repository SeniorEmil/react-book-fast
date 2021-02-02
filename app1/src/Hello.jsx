import React from 'react';

 const Hello = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

Hello.defaultProps = { name: "Text" }

export default Hello;