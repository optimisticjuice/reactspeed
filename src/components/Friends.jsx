import { useState } from "react";
const Friends = () => {
    const [friends, setFriends] = useState(["Alex", "John", "Jane", "Zack", "Zoey", "Cameron", "Musa", "Arthur", "Zara"]);
    const manipulateFriends = () => {
        setFriends([...friends, "Huxn"])
    }
    const removeFriend = () => {
        setFriends(friends.filter((friend,index) => index !== 0))
    }
    return (
     <section>
        {friends.map((friend,index) => (
            <>
            <i key={index}>{friend}</i> 
            <hr />
            </>
        ))}
        <button onClick={manipulateFriends}>Manipulate Friends</button>
        <button onClick={removeFriend}>Remove Friend</button>
     </section>
  )
}

export default Friends