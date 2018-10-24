import React, { Component } from "react";
import "./App.css";

class UserLogin extends Component {

  constructor(props)  {
    super(props);

    this.state = {
      name: '',
      age: 0,
      loggedIn: false
    }
  }

  handleNameChange = (ev) => {
    const value = ev.target.value;

    this.setState({
      name: value
    })
  }

  handleAgeChange = (ev) => {

    // COMPLETAR
    const value = ev.target.value;

    this.setState({
      age: value
    })
  }

  render() {
    return (
      <div style={{ border: '1px solid green', padding: 20, margin: 20, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1> Please, Enter  your name and your age </h1>
        
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: 300}}>
          <input 
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />

          <input 
            type="number"
            value={this.state.age}
            onChange={this.handleAgeChange}
          />
        </div>

        <button onClick={() =>  {
          this.setState({
            loggedIn: true
          })
        }}> LogIn </button>
        
        {this.state.loggedIn && <div style={{ margin: 10}}>
          <MainApp name={this.state.name} age={this.state.age}/>
        </div>}
      </div>
    );
  }
}

const MainApp = (props) => {
  return (
    <div style={{ border: '1px solid grey', padding: 10}}>
      <h2> This is the Main App Component</h2>
      <div style={{ padding: 10}}>
        <BeerComponent name={props.name} age={props.age}/>
      </div>
    </div>
  )
}

class BeerComponent extends Component {
  constructor(props)  {
    super(props);

    this.state = {
      canDrinkBeer: false
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.age !== this.props.age) {
      this.setState({
        canDrinkBeer: this.props.age > 18
      })
    }
  }

  render() {
    return (
      <div style={{ border: '2px solid orange'}}>
        <h2> This is BeerComponent</h2>

        <h3> The current user in the app is: {this.props.name}</h3>

        { !this.state.canDrinkBeer ?
          <p> The Current User Can't Drink Beer <span role="img" aria-label="Cross">❌</span><span role="img" aria-label="Beer">🍺</span> </p> :
          <p> The Current User Can Drink Beer <span role="img" aria-label="Beer">🍺</span> </p>
        }
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserLogin />
      </div>
    );
  }
}

export default App;
