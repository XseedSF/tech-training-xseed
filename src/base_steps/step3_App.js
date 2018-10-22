import React, { Component } from "react";
import "./App.css";

const Counter = (props) => {
  return (
    <button >
      {props.initialValue}
    </button>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter initialValue={10} />
      </div>
    );
  }
}

export default App;
