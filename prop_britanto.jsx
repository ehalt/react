const App = () => {
    return <section>
        <h1>Hello World</h1>
        <User name = "John" image={'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_17.png'} age={22} isSingle={true} hobbies={["codding", "reading", "sleeping"]} />
    </section>
}

const User = ({name, image, age, isSingle, hobbies}) => {
    return(
        <section>
            <img src={image} alt="avater" style
            ={{width: "100px", height: "100px", borderRadius: "50%"}}/>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <h1>Single: {isSingle ? "Yes" : "No"}</h1>
            <h1>Hobbies: {hobbies.join(", ")}</h1>
        </section>
    )
}

export default App;







// -------------------------------
// App.jsx
import Card from "./Card.jsx";

const App = () => {
    return <section>
        <h1>Hello World</h1>
        <Card>
            <h1>My Card</h1>
            <p>This is some content for card 1</p>
        </Card>

    </section>
}

export default App;


// Card.jsx
import React from 'react';

const Card = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Card;










