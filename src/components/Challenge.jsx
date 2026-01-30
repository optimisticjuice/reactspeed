import { useState } from 'react'

const Challenge = () => {
    const [count, setCount] = useState(8);
    const [array, setArray] = useState([]);
    const handleClick = () => {
        setArray([...array, count]);
    }
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
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

    const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) { 
        setTodos([...todos, inputValue]); 
        setInputValue(""); 
    }
}
return (
    <>
    <u>Count : {count}</u>Challenge
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    <button onClick={handleClick}>Add to Array</button>
    <p>Array : {array}</p>
    <button onClick={() => setObjectData({name: "John", age: 30, city: "London"})}>Change Object Data</button>
    <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Add a new todo'/>
    <button type="submit">Add To Do</button>
    </form>
    <ul>
        {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
        ))}
    </ul>
        <div>
        <label>Name : </label>
        <input type="text" value={objectData.name} onChange={(e) => setObjectData({...objectData, name: e.target.value})}/>
        </div>

        <div>
            <label>Age : </label>
            <input type='number' value={objectData.age} onChange={(e) => setObjectData({...objectData, age: e.target.value})}/>

        </div>
        
        <div>
            <label>City : </label>
            <input type="text" value={objectData.city} onChange={(e) => setObjectData({...objectData, city: e.target.value})}/>
        </div>
            <h3>
                Profile : {objectData.name}, {objectData.age}, {objectData.city}
            </h3>

    </>
  )
}

export default Challenge