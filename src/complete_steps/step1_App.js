import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Item = (props) => (
  <div className="item">{props.name} USD ${props.price}</div>
);


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
          <Item name="Laptop Asus 8GB Ram i7" price={500}/>
          <Item name="Laptop Dell 4GB Ram i5" price={250}/>
          <Item name="Laptop Dell 8GB Ram i7" price={450}/>
        </div>
      </div>
    );
  }
}

export default App;
