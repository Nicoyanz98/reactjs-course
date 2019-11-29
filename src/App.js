import React, { Component } from 'react';
import './App.css';

import tasks from './samples/tasks.json';
import Tasks from './components/Tasks.js';

class App extends Component {
  constructor() {
    super();
    this.state = {tasks: tasks};
  }

  render() {
    return (
      <div>
        {
          <Tasks tasks={this.state.tasks} />
        }
      </div>
    );
  }
}

export default App;
