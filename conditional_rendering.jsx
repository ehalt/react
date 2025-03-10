const Cart = () => {
    const items = ['wireless earbuds', 'headphones', 'laptop', 'powerbank', 'phone'];
    return(
        <div>
            <h1>Cart 🛒</h1>
            {items.length > 0 && <h2>You have {items.length} items in your Cart</h2>}

            <ul>
                <h4>Products</h4>
                {
                    items.map(item => <li>{item}</li>)
                }
            </ul>
        </div>
    )
}

const App = () => {
    return <section>
        <h2>Hello there!</h2>
        <Cart />
    </section>
}

export default App;
