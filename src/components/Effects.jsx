import { useState, useEffect } from "react";

const Effects = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log("call useEffect");
        document.title = `Value: ${value}`;
    }, [value])
    return(
        <>
        <h3>
            {value}
        </h3>
        <button onClick={() => setValue(value + 1)}>
            Increment
        </button>
        </>
    )
}