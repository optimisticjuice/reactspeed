import { useState } from 'react'

const Challenge = () => {
    const [count, setCount] = useState(8);
    const [array, setArray] = useState([]);
    const handleClick = () => {
        setArray([...array, count]);
    }
    const [objectData, setObjectData] = useState({
        name: "Amanuel",
        age: 22,
        city: "Dubai"
    },
{
    name: "Jonathan",
    age: 25,
    city: "New York"
},
{
    name: "John",
    age: 30,
    city: "London"
});
    return (
    <>
    <u>Count : {count}</u>Challenge
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    <button onClick={handleClick}>Add to Array</button>
    <p>Array : {array}</p>
    <p>Object Data : {objectData}</p>
    <button onClick={() => setObjectData({name: "John", age: 30, city: "London"})}>Change Object Data</button>
    </>
  )
}

export default Challenge