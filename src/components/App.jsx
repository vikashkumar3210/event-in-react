import React from "react";

function App() {
  const [event, setEvent] = React.useState(false);

  function fire() {
    setEvent(true);
  }
  function normal() {
    setEvent(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: event ? "black" : "white" }}
        onMouseOver={fire}
        onMouseOut={normal}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
