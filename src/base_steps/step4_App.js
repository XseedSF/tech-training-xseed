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
    // COMPLETAR guardando el dato de la edad en el state
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
            
          />
        </div>

        <button onClick={() =>  {
          //COMPLETAR cambiando el state
        }}> LogIn </button>
        
        {/* ESTE SIGUIENTE DIV SOLO SE DEBERIA MOSTRAR SI this.state.loggedIn es true */}
        <div style={{ margin: 10}}>
          <MainApp />
        </div>
      </div>
    );
  }
}

const MainApp = (props) => {
  return (
    <div style={{ border: '1px solid grey', padding: 10}}>
      <h2> This is the Main App Component</h2>
      <div style={{ padding: 10}}>
        <BeerComponent />
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


    /* Usar un metodo de ciclo de  vida, de forma que si la edad es mayor a 18, 
    cambiamos el valor del state canDrinkBeer a true, sino a false */
  }

  render() {
    return (
      <div style={{ border: '2px solid orange'}}>
        <h2> This is BeerComponent</h2>

        <h3> The current user in the app is: COMPLETAR CON EL NOMBRE </h3>

        { !this.state.canDrinkBeer ?
          <p> The Current User Can't Drink Beer 
            <span role="img" aria-label="Cross">❌</span>
            <span role="img" aria-label="Beer">🍺</span> 
          </p> :
          <p> The Current User Can Drink Beer 
            <span role="img" aria-label="Beer">🍺</span> 
          </p>
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
