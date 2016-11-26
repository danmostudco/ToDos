import React, { Component } from 'react';
import './App.css';
import sampleToDos from './sample-todos.js'
// used npm install milligram -S to add in a style sheet

import '../node_modules/milligram/dist/milligram.min.css'
import List from './components/List.js'
import AddBar from './components/AddBar'

class App extends Component {

  constructor() {
    super();

    this.loadSamples = this.loadSamples.bind(this);
    this.completeToDo = this.completeToDo.bind(this);

    // initial state
    this.state = {
      todos: {}
    }
  }

  componentWillMount() {
    this.loadSamples();
  }

  completeToDo(key) {
    const todos = {...this.state.todos}
    todos[key].complete = true;
    this.setState({todos})
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
            <List
              todos={this.state.todos}
              completeToDo={this.completeToDo}
              listComplete={false}
            />

          </div>
          <div className="column">
            <h3 className="center">Completed</h3>
            <hr/>
              <List
              todos={this.state.todos}
              completeToDo={this.completeToDo}
              listComplete={true}
            />

          </div>
        </div>
      </div>
    )
  }
}

export default App;
