import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo'
import AddBar from './components/AddBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>A simple to-do application</h2>
        </div>
        <p className="App-intro"><strong>Below you will find things to be done or completed</strong></p>
        <ToDo />
        <AddBar />
      </div>
    );
  }
}

export default App;
