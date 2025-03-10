// first part 

import {useEffect, useState} from "react";


const App = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        console.log('call useEffect')
        document.title = `Increment ${value}`
    });

    return <section>
        <h2>{value}</h2>
        <button onClick={() => setValue(value +  1)}>Click me </button>
    </section>
}

export default App;





//  more updates 

import {useEffect, useState} from "react";


const App = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        console.log('call useEffect')
        document.title = `Increment ${value}`
    }, []);

    return <section>
        <h2>{value}</h2>
        <button onClick={() => setValue(value +  1)}>Click me </button>
    </section>
}

export default App;





// more updates 

import {useEffect, useState} from "react";


const App = () => {
    const [value, setValue] = useState(0)
    const [something, setSomething] = useState(0);

    useEffect(() => {
        console.log('call useEffect')
        document.title = `Increment ${value}`
    }, [value, something]);

    return <section>
        <h2>{value}</h2>
        <button onClick={() => setValue(value +  1)}>Increment </button>
        <button onClick={() => setSomething(value +  1)}>Increment by something</button>
    </section>
}

export default App;





// i can't write conditions this way if i do it will throw errors

if (value > 0) {
        useEffect(() => {
            console.log('call useEffect')
            document.title = `Increment ${value}`
        }, [value]);
    }



// insted i have to do this way


    useEffect(() => {
        if (value > 0) {
            console.log('call useEffect')
            document.title = `Increment ${value}`
        }
    }, [value]);


// loading data 


import {useEffect, useState} from "react";


const App = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        async function getData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data =  await response.json()
            if (data && data.length) setData(data)
        }
        getData();
    }, [])

    return <section>
        <ul>
            {
                data.map(item => <section>
                    <li key={item.id}>{item.title}</li>
                    <li> Body --> {item.body}</li>
                </section>)
            }
        </ul>
    </section>
}

export default App;





