import React, { Component } from 'react';
import './App.css';

// DECLARATING COMPONENTS
// Declarating a new component with a class
class HelloworldC extends Component {
  render () {
    return (<div>Hello World Class</div>);
  }
}

// Declarating a new component with a function
function HelloworldF() {
  return (<div>Hello World Function</div>);
}

const HelloworldConst = () => <div>Hello World Const</div>


// The App can be declared as a function App() or as a const as well,
// just like the components (without the render() method)
class App extends Component {
  render() {
    return (
      // <React.Fragment></React.Fragment> is used to return
      // more than one component in another
      <React.Fragment>
        <div>
          This is my component with a class: <HelloworldC />
        </div>

        <br/>

        <div>
          This is my component with a function: <HelloworldF />
        </div>
        
        <br/>
        
        <div>
          This is my component as a const: <HelloworldConst />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
