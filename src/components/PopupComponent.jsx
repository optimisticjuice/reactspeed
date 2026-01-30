import { createPortal } from "react-dom";


const PopupComponent = (props) => {
  return createPortal (
    
    <section>
    {props.copied && (<div style={{color: "green", position: "fixed", bottom: "2rem", right: "2rem", zIndex: 2}}>Copied To Clipboard</div> )}
    </section>, 
    document.querySelector("#pop-up")
    // ensure the , displayed below the bottom tag inside the return with the createPortal named right after the return ()
    // then use document.querySelector("#pop-up") to select the div with the id of pop-up from index.html.
    
  )
}

export default PopupComponent;
