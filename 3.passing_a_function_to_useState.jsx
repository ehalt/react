// ExampleOne.jsx

import React, {useState} from 'react';

const ExampleOne = () => {
    const [count, setCount] = useState(() => {
        const initialCount = 0;
        return initialCount;
    });
    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default ExampleOne;



// ExampleTwo.jsx
import React, {useState} from 'react';

const ExampleTwo = () => {
    const [randomNumber, setRandomNumber] = useState(() => Math.floor(Math.random() * 100));
    const generateNewRandomNumber = () => {
        const newNumber = Math.floor(Math.random() * 100);
        setRandomNumber(newNumber);
    }
    return (
        <div>
            <h1>Random Number: {randomNumber}</h1>
            <button onClick={generateNewRandomNumber}>Generate new random number</button>
        </div>
    );
};

export default ExampleTwo;



// ExampleThree.jsx [*** important ] 


import React, {useEffect, useState} from 'react';

const ExampleThree = () => {
    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem('name');
        return savedName ? JSON.parse(savedName) : '';
    });

    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name));
    }, [name]);

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleClear = () => setName('');

    return (
        <div>
            example three
            <h1>Your name: {name}</h1>
            <input type="text" value={name} onChange={handleChange} placeholder={'Enter your name'} />
            <button onClick={handleClear}>Clear name</button>
        </div>
    );
};

export default ExampleThree;


