import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// used npm install milligram -S to add in a style sheet
import '../node_modules/milligram/dist/milligram.min.css'
import ToDo from './components/ToDo'
import AddBar from './components/AddBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>To-Do's for the Day</h2>
        </div>
        <p className="App-intro"><strong>Below you will find things to be done or completed</strong></p>
        <div className="container">
          <div className="row">
            <div className="column column-50 column-offset-25">
              <AddBar />
              <ToDo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
