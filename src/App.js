import React, { Component } from 'react';
import './App.css';
import sampleToDos from './sample-todos.js'
// used npm install milligram -S to add in a style sheet

import '../node_modules/milligram/dist/milligram.min.css'
import List from './components/List.js'
import AddBar from './components/AddBar'
import base from './base'

class App extends Component {

  constructor() {
    super();

    this.loadSamples = this.loadSamples.bind(this);
    this.toggleToDo = this.toggleToDo.bind(this);
    this.addToDo =  this.addToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);

    // initial state
    this.state = {
      todos: {}
    }
  }

  componentWillMount() {
    this.ref = base.syncState('dansToDos', {
      context: this,
      state: 'todos'
    })
    //this.loadSamples();
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addToDo(todo) {
    const todos = {...this.state.todos}

    const timestamp = Date.now();
    todos[`todo${timestamp}`] = todo;
    // set state
    this.setState({todos: todos});
  }

  toggleToDo(key) {
    const todos = {...this.state.todos}
    todos[key].complete = !todos[key].complete; // switcheroo
    this.setState({todos})
  }

  removeToDo(key) {
    const todos = {...this.state.todos};
    todos[key] = null;
    this.setState({todos: todos});
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

            <AddBar addToDo={this.addToDo}/>

          </div>
        </div>

        <div className="row">
          <div className="column">
            <h3 className="center">Next Up</h3>
            <hr/>
            <List
              todos={this.state.todos}
              toggleToDo={this.toggleToDo}
              removeToDo={this.removeToDo}
              listComplete={false}
            />

          </div>
          <div className="column">
            <h3 className="center">Completed</h3>
            <hr/>
              <List
              todos={this.state.todos}
              toggleToDo={this.toggleToDo}
              removeToDo={this.removeToDo}
              listComplete={true}
            />

          </div>
        </div>
      </div>
    )
  }
}

export default App;
