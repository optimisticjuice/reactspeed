import {useState} from "react";
const Example = () => {
    const [count, setCount] = useState(() => {
        const initialCount = 10;
        return initialCount;
    });
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }
  return (
    <section>
        <h2>Count : {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </section>
  )
}

export default Example