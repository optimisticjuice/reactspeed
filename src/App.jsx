import { useState } from "react";
import Friends from "./components/Friends";
import Movies from "./components/Movies";
function App(){
  const [count, setCount] = useState(0);
  return(
    <>
    <h1>Count : {count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button> 
    <Friends />
    <Movies />
    </>
  )
}
export default App;