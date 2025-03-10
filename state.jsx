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




// -------------------- 


import {useState} from "react";


const App = () => {
    const [friends, setFriends] = useState(['Alex', 'john']);
    const addOneFriend = () => {
        setFriends([...friends, 'kuddus']);
    }
    const removeFriend = () => {
        setFriends(friends.slice(0, -1));
    }
    const updateOneFriend = () => {
        setFriends(friends.map(f => f === 'Alex' ? 'Alex smith' : f));
    }
    return <section>
        {
            friends.map((friend) => <li key={Math.random()}>{friend}</li>)
        }
        <button onClick={addOneFriend}>Add new friend</button>
        <button onClick={removeFriend}>Remove one friend</button>
        <button onClick={updateOneFriend}>Update one friend</button>
    </section>
}

export default App;







// -----------------------------

import {useState} from "react";


const App = () => {
    const [movie, setMovie] = useState({
        title: 'Equalizer 3',
        ratings: 7
    });
    const handleClick = () => {
        // const copyMovie = {...movie, ratings: 5};
        // setMovie(copyMovie);

        setMovie({...movie, ratings: 5});
    }
    return <section>
        <h1>{movie.title}</h1>
        <p>{movie.ratings}</p>
        <button onClick={handleClick}>Change Ratings</button>
    </section>
}

export default App;






// ----------------


import {useState} from "react";


const App = () => {
    const [movies, setMovies] = useState([
        {id: 1, title: 'spider man', ratings: 3},
        {id: 2, title: 'batman', ratings: 5},
    ]);
    const handleClick = () => {
        setMovies(movies.map((m) => (m.id === 1 ? {...movies, title: 'john wick 5'} : m)))
    }
    return <section>
        {
            movies.map(movie => <li key={Math.random()}>{movie.title}</li>)
        }
        <button onClick={handleClick}>Change name</button>
    </section>
}

export default App;







// ----------------------

// App.jsx

import {useState} from "react";
import ComponentOne from "./Components/ComponentOne.jsx";
import ComponentTwo from "./Components/ComponentTwo.jsx";

const App = () => {
    const [count, setCount] = useState(0);
    return <section>
        <ComponentOne count = {count } onClickHandler = {() => setCount(count + 1)} />
        <ComponentTwo count = {count } onClickHandler = {() => setCount(count + 1)} />
    </section>
}

export default App;




// ComponentOne.jsx
import React from 'react';

const ComponentOne = ({count, onClickHandler}) => {
    return (
        <div>
            <h2>This is component 1</h2>
            <p>{count}</p>
            <button onClick={onClickHandler}>Increment</button>
        </div>
    );
};

export default ComponentOne;

// ComponentTwo.jsx

import React from 'react';

const ComponentTwo = ({count, onClickHandler}) => {
    const handleClick = () => onClickHandler();
    return (
        <div>
            <h2>This is component 2 </h2>
            <p>{count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};

export default ComponentTwo;





