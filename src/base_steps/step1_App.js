import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <h1>Tech Training de React!</h1>
          <div className="item">Laptop Asus 8GB Ram i7 USD 500</div>
          <div className="item">Laptop Dell 4GB Ram i5 USD 250</div>
          <div className="item">Laptop Dell 8GB Ram i7 USD 450</div>
        </div>
      </div>
    );
  }
}

export default App;
