import { useState } from 'react'

const Example2 = () => {
    const [randomNumber, setRandomNumber] = useState(() => {
        return Math.floor(Math.random() * 100); 
    });
    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 100);
        setRandomNumber(newRandomNumber);
    }
  return (
    <section>
        <b>Random Number : {randomNumber}</b>
        <button onClick={generateRandomNumber}>Generate new Random Number</button>
    </section>
  )
}

export default Example2