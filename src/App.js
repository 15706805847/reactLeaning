import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      const ho = new Object;
      ho.name = 'h';
      ho.age = 10
    return (
      <div className="App">
        <p className="App-intro">
            name = {ho.name}
        </p>
      </div>
    );
  }
}

export default App;
