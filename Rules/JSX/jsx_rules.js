// 1. JSX Must Return One Parent Element

return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);



// or use fragment 

return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);


// 2. Every Tag Must Be Closed

<img src="image.png" />

// 3. Use className Instead of class

  <div className="box"></div>


// 4. Use CamelCase for Attributes

<button onClick={handleClick}></button>


// 5. JavaScript Goes Inside {}5. JavaScript Goes Inside {}
<p>{5 + 5}</p>
<p>{isLoggedIn ? "Yes" : "No"}</p>




// 6. JSX Can Only Use Expressions

{x > 5 ? "Hello" : "Bye"}



// 7. Inline Styles Must Be Objects

<div style={{ color: "red" }}></div>


// 8. Use htmlFor Instead of for

<label for="email">Email</label>


// 9. Comments in JSX Use {/* */}

{/* comment */}


// 10. Use Keys in Lists

{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}


// 11. Component Names Must Start with Capital Letters

function Header() {
  return <h1>Header</h1>;
}

<Header />


// 12. Boolean Attributes Work Differently
<button disabled={true}>Click</button>


// 13. JSX Prevents XSS Automatically

const userInput = "<script>alert('hack')</script>";

<p>{userInput}</p>


// 14. Use dangerouslySetInnerHTML Carefully
<div dangerouslySetInnerHTML={{ __html: htmlContent }} />


// 15. JSX Is Converted to JavaScript
<h1>Hello</h1>
// this becomes: 
// this
React.createElement("h1", null, "Hello");


/*
Most Important JSX Rules to Remember
One parent element
Close all tags
className not class
JS inside {}
Inline styles are objects
Components start with capital letters
Use keys in lists

*/

// real example 

function App() {
  const name = "Kus";
  const isLoggedIn = true;

  return (
    <div className="container">
      <h1>Hello {name}</h1>

      {isLoggedIn ? (
        <p>Welcome back</p>
      ) : (
        <p>Please login</p>
      )}

      <button onClick={() => alert("Clicked")}>
        Click Me
      </button>
    </div>
  );
}






