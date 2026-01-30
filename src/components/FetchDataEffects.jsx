import { useState, useEffect } from "react";

function FetchDataEffects(){
    const [data, setData] = useState([]);
    useEffect(() => {
     const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const apidata = await response.json();
        setData(apidata);
     }
     fetchData(); 
    }, []);

    if(data && data.length === 0){
        return <h1>Loading...</h1>
    }
  return(
    
    <>
    <ul>
        {
           data.slice(0,5).map((item,index) => (
            <section>
                <li key={index}>Title : {item.title}</li>
                <li key={index}>Body : {item.body}</li>
            </section>
           ))
        }
    </ul>
    </>
  )
}


export default FetchDataEffects;