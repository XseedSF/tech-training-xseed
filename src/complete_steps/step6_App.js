import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const UserForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form"> 
        
          <label> Name: </label>
          <input 
            name="name" 
            type="text"
          />
          

        <button type="submit"> Save </button>
      </div>
    </form>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <UserForm />
      </div>
    );
  }
}

export default App;
