import React, { Component } from 'react';

class Task extends Component {
  render () {
    if (this.task.task.done) {
      return <div className="mx-auto py-2" style={{'width': "80vw"}}>
        <div className="d-flex justify-content-between w-100 text-success border p-2">
          <div className="d-block">
              <h4 className="display-4 p-2">{this.task.id} - {this.task.task.title}</h4>
            <p className="lead p-2 pl-4">-{this.task.description}</p>
          </div>
          <div className="d-flex justify-content-center text-center align-items-center pr-2">
            <label className="mb-0" htmlFor={this.task.id}>Finished: </label>
            <input className="ml-2" type="checkbox" id={this.task.id} onClick={this.finishTask} defaultChecked/>
          </div>
          <div className="d-flex align-items-center">
            <button className="btn btn-danger" onClick={this.deleteTasks}>Delete</button>
          </div>
        </div>
      </div>
    } else {
        return <div className="mx-auto py-2" style={{'width': "80vw"}}>
        <div className="d-flex justify-content-between w-100 border p-2">
          <div className="d-block">
            <h4 className="display-4 p-2">{this.task.id} - {this.task.title}</h4>
            <p className="lead p-2 pl-4">-{this.task.description}</p>
          </div>
          <div className="d-flex justify-content-center text-center align-items-center pr-2">
            <label className="mb-0" htmlFor={this.task.id}>Finished: </label>
            <input className="ml-2" type="checkbox" id={this.task.id} onClick={this.finishTask}/>
          </div>
          <div className="d-flex align-items-center">
            <button className="btn btn-danger" onClick={this.deleteTasks}>Delete</button>
          </div>
        </div>
      </div>
    }
  }
}

export default Task;