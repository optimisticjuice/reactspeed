import React from 'react'

const Section = ({count, onClickHandler}) => {
  return (
    <section>
        <h2>Section</h2>
        <p>Count : {count}</p>
        <button onClick={onClickHandler}>Increment</button>
    </section>
  )
}

export default Section