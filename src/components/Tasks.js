import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from './Task.js';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {tasks: this.props.tasks};

    this.finishTask = taskId => this.props.finishTask(taskId);
    this.deleteTask = taskId => this.props.deleteTask(taskId);
  };

  render () {
    if (typeof this.state.tasks !== 'undefined' && Array.isArray(this.state.tasks) && this.state.tasks.length !== 0) {
      return this.state.tasks.map(task => <Task key={task.id} task={task} finishTask={this.finishTask} deleteTask={this.deleteTask}/>)
    } else {
      return (
        <div className="d-block w-100 text-center text-danger p-2">
          <h1>The tasks are not available</h1>
        </div>
      )
    }
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired
}

export default Tasks;