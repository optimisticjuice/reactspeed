import React from "react";
import { useState } from "react";
const Friends = () => {
    const [friends, setFriends] = useState(["Alex", "John", "Jane", "Zack", "Zoey", "Cameron", "Musa", "Arthur", "Zara"]);
    const manipulateFriends = () => {
        setFriends([...friends, "Huxn"])
    }
    const removeFriend = () => {
        setFriends(friends.filter((friend,index) => index !== friends.length - 1)); // friends.length works here because we are removing the last friend in the array
                                                                                    // while friend.length does not work because friend is an individual name and doesn't have a length property
    }
    return (
     <section>
        {friends.map((friend,index) => (
            <React.Fragment key={index}>
            <i>{friend}</i> 
            <hr />
            </React.Fragment>
        ))}
        <button onClick={manipulateFriends}>Manipulate Friends</button>
        <button onClick={removeFriend}>Remove Friend</button>
     </section>
  )
}

export default Friends