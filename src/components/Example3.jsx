import React from 'react' // Import React library to create components and use hooks

const Example3 = () => { // Declare a functional component named Example3 using arrow function syntax
    const [name, setName] = useState(() =>{ // useState hook creates state variable 'name' and setter function 'setName'
        // The arrow function inside useState is lazy initialization - only runs once on first render
        const savedName = localStorage.getItem("name"); // localStorage.getItem retrieves data from browser's local storage by key
        return savedName ? JSON.parse(savedName) : ""; // Ternary operator: if savedName exists, parse it from JSON string, otherwise return empty string
    });

    useEffect(() => { // useEffect hook runs side effects after component renders
        localStorage.setItem("name", JSON.stringify(name)); // localStorage.setItem saves data as key-value pair, converting name to JSON string
    }, [name]); // Dependency array: effect runs only when 'name' state changes
  return ( // Return JSX that gets rendered to the DOM
    <section> // Semantic HTML element for grouping related content
        <h2>Your Name : {name}</h2> // h2 heading with dynamic content using curly braces for JavaScript expression
        <input 
            type="text" // HTML input type for text entry
            value={name} // Controlled component: input value tied to state variable
            onChange={(e) => setName(e.target.value)} // onChange event handler with arrow function, e.target.value gets input's current value
            placeholder='Enter Your Name!' // Placeholder text shown when input is empty
        />
        <button onClick={() => localStorage.setItem("name", JSON.stringify(name))}>Save Name</button> 
        // Button with onClick handler using arrow function to manually save name to localStorage
    </section>
  )
}

export default Example3 // Export component as default to be imported in other files