import logo from "./logo.svg";
import { useRef } from "react";
import "./App.css";

function App() {
  const myref = useRef();
  return (
    <div className="App">
      <h1 ref={myref}>Hello</h1>
      <button onClick={() => (myref.current.innerText = "Hello World!")}>
        Click Me !
      </button>
    </div>
  );
}

export default App;
