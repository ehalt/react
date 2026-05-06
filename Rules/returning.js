// 1. Returning a Single Element

function App() {
  return <h1>Hello</h1>;
}


// here react gets exactly one parent element 
<h1>Hello</h1>


// 2. Returning Multiple Elements Directly
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>World</p>
    </div>
  );
}

// option 2 : using fragment <></>

function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>World</p>
    </>
  );
}

/*
when to use what ? 

div:
  wehen,
    you need styling 
    you need layout
    you need className / id
fragment:
  when,
    you only need grouping 
    you don't want extra DOM element


Note: 
React components must return a single root element.
If multiple elements are needed, they must be wrapped inside one parent element like a div or Fragment.

*/








