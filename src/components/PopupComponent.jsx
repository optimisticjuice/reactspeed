import React from 'react'

const PopupComponent = (props) => {
  return (
    <>
    {props.copied && <div style={{color: "green", position: "fixed", bottom: "2rem", right: "2rem", zIndex: 2}}>Copied To Clipboard</div>}
    </>
  )
}

export default PopupComponent;
