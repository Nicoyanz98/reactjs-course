import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import tasks from './samples/tasks.json';
import Tasks from './components/Tasks.js';
import TaskForm from './components/TaskForm.js';
import Posts from './components/Posts.js';

class App extends Component {
  constructor() {
    super();
    this.state = {tasks: tasks};
    this.idCnt = this.state.tasks.length;
  }

  addTask = state => {
    let allTasks = this.state.tasks;
    allTasks.push({
      id: this.idCnt,
      title: state.title,
      description: state.description,
      done: false
    });
    this.idCnt++;
    this.setState({tasks: allTasks})
  }

  finishTask = id => {
    let finishedTask = this.state.tasks.filter(task => task.id === id);
    let newState = this.state.tasks;
    newState[newState.indexOf(finishedTask[0])].done = !newState[newState.indexOf(finishedTask[0])].done;
    this.setState({tasks: newState});
  }

  deleteTask = id => {
    let deletedTask = this.state.tasks.filter(task => task.id === id);
    let newState = this.state.tasks;
    newState.splice(newState.indexOf(deletedTask[0]),1)
    this.setState({tasks: newState});
  }

  render() {
    return (
      <div>
        {
          <React.Fragment>
            <Router>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="nav-link text-light bg-dark">Home</Link>
                <Link to="/posts" className="nav-link text-light bg-dark">Posts</Link>
              </nav>
              <Route exact path="/" render={() => {
                return <React.Fragment>
                  <TaskForm addTask={this.addTask} />
                  <Tasks tasks={this.state.tasks} finishTask={this.finishTask} deleteTask={this.deleteTask} />
                </React.Fragment>
              }} />
            <Route path="/posts" component={Posts} />
            </Router>
          </React.Fragment>
        }
      </div>
    );
  }
}

export default App;
