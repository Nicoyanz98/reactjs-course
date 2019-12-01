import React, { Component } from 'react';

export default class TaskForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      description: '',
    }

    this.addTask = e => {
      e.preventDefault();
      this.props.addTask(this.state);
    }
  }

  submitInfo = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return <div className="container mx-auto p-2">
      <form className="p-2 d-block" onSubmit={this.addTask}>
        <div className="d-flex justify-content-between align-items-center p-2">
          <label className="pr-2 my-0" htmlFor="titleInput">Title: </label>
          <input 
            type="text" 
            id="titleInput" 
            name="title"
            className="form-control" 
            placeholder="Write task title"
            onChange={this.submitInfo}
            defaultValue={this.state.title} 
          />
        </div>

        <div className="d-flex justify-content-between align-items-center p-2">
          <label className="pr-2 my-0" htmlFor="descriptionInput">Description: </label>
          <textarea 
            id="descriptionInput"
            className="form-control" 
            name="description"
            placeholder="Write task description" 
            onChange={this.submitInfo} 
            defaultValue={this.state.description} 
          ></textarea>
        </div>
        
        <div className="d-flex justify-content-center">
          <button className="btn btn-success" type="submit">Agregar</button>
        </div>
      </form>
    </div>
  }
}