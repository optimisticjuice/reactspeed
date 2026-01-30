import { useState } from "react";
import Friends from "./components/Friends";
import Movies from "./components/Movies";
import Section from "./components/Section";
import Section2 from "./components/Section2";
import Example from "./components/Example";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Challenge from "./components/Challenge";
import ShoppingList from "./components/ShoppingList";
import CopyInput from "./components/CopyInput";
import Switcher from "./components/Switcher";
import Date from "./components/Date";
import BasicEffect from "./components/BasicEffect";
import FetchDataEffects from "./components/FetchDataEffects";
function App(){
  const [count, setCount] = useState(0);
  return(
    <>
    <BasicEffect />
    <Switcher />
    <Date />
    <h1>Count : {count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button> 
    <Friends />
    <Movies />
    <Section  count={count} onClickHandler={() => setCount(count + 1)} />
    <Section2 count={count} onClickHandler={() => setCount(count + 1)} />
    <Example />
    <Example2 />
    <Example3 />
    <CopyInput />
    <Challenge />
    <ShoppingList />
    <FetchDataEffects />
    </>
  )
}
export default App;