import { useState, useEffect } from "react";
const Date = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData(){
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await response.json();
            setData(data);
        }
        getData();
    }, []); 

    if(data && data.length === 0 ){
        return <h1>Loading...</h1>
    }

    return (
        <>
        <ul>
            {
                data.slice(0,5).map((item, index) => (
                    <section key={index}>
                    <li> Title : {item.title}</li>
                    <li> Completed : {item.completed}</li>
                    </section>
                ))
            }
        </ul>
        </>
    )
}

export default Date