import React, { Component } from 'react';
import './App.css';
// used npm install milligram -S to add in a style sheet
import '../node_modules/milligram/dist/milligram.min.css'
import ToDo from './components/ToDo'
import AddBar from './components/AddBar.js'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="column column-50 column-offset-25">

            <AddBar />

          </div>
        </div>

        <div className="row">
          <div className="column">
            <h3 className="center">Next Up</h3>
            <hr/>

            <ToDo />
            <ToDo />
            <ToDo />

          </div>
          <div className="column">
            <h3 className="center">Completed</h3>
            <hr/>

          </div>
        </div>
      </div>
    )
  }
}

export default App;
