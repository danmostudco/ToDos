import React, { Component } from 'react';
import './App.css';
import sampleToDos from './sample-todos.js'
// used npm install milligram -S to add in a style sheet

import '../node_modules/milligram/dist/milligram.min.css'
import UpcomingList from './components/UpcomingList.js'
import AddBar from './components/AddBar'

class App extends Component {

  constructor() {
    super();

    this.loadSamples = this.loadSamples.bind(this);

    // initial state
    this.state = {
      todos: {}
    }
  }

  componentWillMount() {
    this.loadSamples();
  }

  loadSamples() {
    this.setState({
      todos: sampleToDos
    })
  }

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
            <UpcomingList
              todos={this.state.todos}
            />

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
