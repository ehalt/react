import { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    const Increment = () => {
        setCount(count + 1);
    }
    const Decrement = () => {
        setCount(count - 1);
    }
    return <section>
        <h1>{count}</h1>
        <button onClick={Increment}>plus</button>
        <button onClick={Decrement}>minus</button>
    </section>
}

export default App;








// ------------ 

import {useState} from "react";


const App = () => {
    const [friends, setFriends] = useState(['Alex', 'john']);
    const addOneFriend = () => {
        setFriends([...friends, 'kuddus']);
    }
    return <section>
        {
            friends.map((friend) => <li key={Math.random()}>{friend}</li>)
        }
        <button onClick={addOneFriend}>Add new friend</button>
    </section>
}

export default App;






