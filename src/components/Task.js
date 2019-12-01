import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {task: this.props.task}

    this.finishTask = () => this.props.finishTask(this.state.task.id);
    this.deleteTask = () => this.props.deleteTask(this.state.task.id);
  }
  
  render () {
    const task = this.state.task;
    if (typeof task !== 'object' || Array.isArray(task)) {
      return <div className="container mx-auto text-center">
        <p className="lead p-2">There was an error and the information is not available</p>
      </div>
    } else {
      return (<div className="container mx-auto py-2">
        <div className={
          this.state.task.done ? "d-flex justify-content-between w-100 text-success border p-2" : "d-flex justify-content-between w-100 border p-2"
        }>
          <div className="d-block">
            <h4 className="display-4 p-2">{task.title}</h4>
            <p className="lead p-2 pl-4">-{task.description}</p>
          </div>
          <div className="d-flex justify-content-center text-center align-items-center pr-2">
            <label className="mb-0" htmlFor={task.id}>Finished: </label>
            <input className="ml-2" type="checkbox" id={task.id} onClick={this.finishTask} defaultChecked={this.state.task.done}/>
          </div>
          <div className="d-flex align-items-center">
            <button className="btn btn-danger" onClick={this.deleteTask} type="button">Delete</button>
          </div>
        </div>
      </div>)
    }
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

export default Task;