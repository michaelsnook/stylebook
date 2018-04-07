import React, { Component } from 'react';
import Stylebook from './views/Stylebook';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Stylebook />
      </div>
    );
  }
}

export default App;
