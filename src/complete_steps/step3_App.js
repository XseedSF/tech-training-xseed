import React, { Component } from "react";
import "./App.css";

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: props.initialValue
    }
  }
  handleClick = () => {
    const newNum = this.state.num + 1;

    this.setState({
      num: newNum
    })
  }

  render() {
    const buttonSyle = {
      width: 100, 
      height: 50, 
      borderColor: 'grey', 
      backgroundColor: 'yellow',
      fontSize: 20,
      fontWeight: 'bold'
    };
    return (
      <button onClick={this.handleClick} 
        style={buttonSyle}>
        {this.state.num}
      </button>
    )
  }
}

class App extends Component {
  render() {
    const appStyles = { 
      display: 'flex', 
      height: '100vh', 
      justifyContent: 'center', 
      alignItems: 'center'
    }
    return (
      <div style={appStyles}>
        <Counter initialValue={10} />
      </div>
    );
  }
}

export default App;
