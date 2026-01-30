import { useEffect, useState } from "react"

const BasicEffect = () => {
    const [count, setCount] = useState(0);
    const [copy, setCopy ] = useState(false);
    const handleCopy = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(e.target.innerText).then(() =>{
            setCopy(true);
            setTimeout(() => {
                setCopy(false);
            }, 10000);
        });
        
    }   
    useEffect(() =>{
        document.title = `Count : ${count}`
    }, [count])
  return (
    <>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <h1 style={{cursor: "pointer"}} onClick={handleCopy}>Count : {count}</h1>
    <button onClick={() => setCount(count - 1)}> Decrement </button>
     {copy && <div style={{color: "green", position: "fixed", bottom: "2rem", right: "2rem", zIndex: 2}}>Copied To Clipboard</div>}
    </>
  ) 
}

export default BasicEffect