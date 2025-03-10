// const Button = () => {
//     const handleClick = () => {
//         console.log('clicked')
//     }
//     return <button onClick={handleClick}>Click me</button>
// }

const Copy = () => {
    const copyHandler = () => {
        alert('stop stealing my content')
    }
    return(
        <p onCopy={copyHandler}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis in nostrum perspiciatis recusandae reprehenderit temporibus voluptate. Commodi consectetur culpa dicta esse eum expedita id, iure labore placeat quaerat quibusdam repellendus velit voluptas. Adipisci aperiam architecto autem beatae blanditiis consectetur cum, eius, enim eum fugit in ipsa laudantium maxime molestiae natus necessitatibus non numquam odio perspiciatis possimus praesentium quia reiciendis rem rerum soluta sunt tempora tenetur veniam vitae voluptatibus. Ad eius illum iure, molestiae nihil odio optio placeat quisquam repellat vero? Ab atque consectetur distinctio ducimus et eveniet expedita facilis illo incidunt, maxime officia omnis, optio perspiciatis porro ratione recusandae repellendus, saepe? Commodi dolor dolore explicabo fuga illum, in itaque, nam nihil numquam obcaecati quod soluta tenetur! Ab architecto aspernatur atque aut beatae, cupiditate ducimus est facere fugit id, libero nam, necessitatibus nesciunt nisi officia possimus quas rerum saepe sapiente vitae. Alias aut dolorem, excepturi ipsa nobis perspiciatis possimus provident reprehenderit tempora veniam? Dolore nisi tempora veritatis. Amet atque consequuntur dolorem enim illo impedit ipsam iure maiores maxime modi nam nemo placeat praesentium, quod rem repellendus rerum tempore unde vero voluptas? Accusamus aliquid cupiditate dolores error explicabo, officiis repellat repellendus saepe sapiente temporibus. Exercitationem laboriosam minima reiciendis vero! Aperiam eveniet, labore.</p>
    )
}

const App = () => {

    return <section>
        <h2>Hello there!</h2>
        <Copy />

    </section>
}

export default App;
