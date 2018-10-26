import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const UserForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form"> 
        
      <div className="input-field">
          <label> Name: </label>
          <input 
            name="name" 
            type="text"
          />
        </div>

        <div className="input-field">
          <label> Email: </label>
          <input 
            name="email" 
            type="text"
          />
        </div>

        <div className="input-field">
          <label> Phone Number: </label>
          <input 
            name="phoneNumber" 
            type="text"
          />
        </div>

        <div className="input-field">
          <label> Country: </label>
          <input 
            name="country" 
            type="text"
          />
        </div>

        <div className="input-field">

        <label> Role: </label>
          <select 
            name="role" 
            type="text"
          > 
            <option value="select" > Select a role </option>
            <option value="Administrator" > Administrator </option>
            <option value="Supervisor" > Supervisor </option>
            <option value="Worker" > Worker </option>

          </select>
        </div>
          

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
