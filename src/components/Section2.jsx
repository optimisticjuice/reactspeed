import React from 'react'

const Section2 = ({count, onClickHandler}) => {
  return (
    <section>
        <h2>Section2</h2>
        <p>Count : {count}</p>
        <button onClick={onClickHandler}>Increment</button>
    </section>
  )
}

export default Section2