
import { useState } from "react"; // Import useState hook from React for state management
import PopupComponent from "./PopupComponent.jsx";
const CopyInput = () => {
    const [inputValue, setInputValue] = useState(" "); // State for storing the input text value, initialized with a space
    const [copyValue, setCopyValue] = useState(false); // State for tracking copy status, initialized to false (not copied)
    
    const handleCopy = () => { // Function to handle copying text to clipboard
        navigator.clipboard.writeText(inputValue).then(() => { // Use browser's Clipboard API to write text, returns a Promise
            setCopyValue(true); // Set copy status to true when copy succeeds
            setTimeout(() => { // Set a timer to reset the copy status after 2 seconds
                setCopyValue(false); // Reset copy status back to false to hide the success message
            }, 7500); // 7500 milliseconds = 7.5 seconds delay
        }) 
    }
  return ( // Return JSX for rendering the component UI
    <>
    <input 
        type="text" // HTML input type for text entry
        value={inputValue} // Controlled component: input value bound to inputValue state
        onChange={(e) => setInputValue(e.target.value)} // Update state when user types, e.target.value gets current input
    />
    <button onClick={handleCopy}>Copy</button> {/* Button that triggers handleCopy function when clicked */}
    {copyValue && <p>Text copied to clipboard</p>} {/* Conditional rendering: show message only when copyValue is true */}
     <PopupComponent copied={copyValue}/>
    </>
  )
}

export default CopyInput; // Export component as default for use in other files