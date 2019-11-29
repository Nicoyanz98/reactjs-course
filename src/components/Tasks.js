import React, { Component } from 'react';

import Task from './Task.js';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {tasks: props.tasks};
  };

  render () {
    if (typeof this.state.tasks !== 'undefined') {
      return this.state.tasks.map(task => <Task key={task.id} task={task}/>)
    } else {
      return (
        <div className="d-block w-100 text-center text-danger">
          <h1>There's no tasks available</h1>
        </div>
      )
    }
  }
}

export default Tasks;