import { useState } from 'react'

const Switcher = () => {
const [sw, setSw] = useState(false);
    return (
        <div>
{
    sw ? (<span>OFF</span>) : (<span>ON</span>)
}
<br />
<input type="text" placeholder={sw ? "dark" : "light"}/>
<button onClick={() => setSw(s => !s)}>Switch {sw ? "ON" : "OFF"}</button>
        </div>
    )
}

export default Switcher