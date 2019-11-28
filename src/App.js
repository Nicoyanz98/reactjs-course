import React, { Component } from 'react';
import './App.css';

// DECLARATING COMPONENTS
// Declarating a new component with a class
// class HelloworldC extends Component {
//   render () {
//     return (<div>Hello World Class</div>);
//   }
// }

// Declarating a new component with a function
// function HelloworldF() {
//   return (<div>Hello World Function</div>);
// }

// Declarating a new component as a const
// const HelloworldConst = () => <div>Hello World Const</div>;

// function Declarations() {
//   return (
//     <React.Fragment>
//       <HelloworldC/>
//       <HelloworldF/>
//       <HelloworldConst/>
//     </React.Fragment>
//   );
// }


// PROPS
// With a class
// class PropExampleC extends Component {
//   render () {
//     return (
//       <div>
//         Hello {this.props.newProp}, from class
//       </div>
//     );
//   }
// }

//With a function
// function PropExampleF(props) {
//   return (
//     <div>
//       Hello {props.newProp}, from function
//     </div>
//   );
// }

// function Props() {
//   return (
//     <React.Fragment>
//         <div>
//           <PropExampleC newProp="Nicolas" />
//         </div>
//         <div>
//           <PropExampleF newProp="Nico" />
//         </div>
//       </React.Fragment>
//   );
// }


// STATES
class StateElement extends Component {
  // Declaration of a constractur for the state
  constructor() {
    super(); // Mandatory (add props if they are used)
    this.state = {show: true};
  }

  // Recommend way of setting an state
  toggleState = () => {
    this.setState(state => ({
      show: !this.state.show
    }));
  }

  render () {
    // Checking states and toggling events depending of their value
    if (this.state.show) {
      return (
        <div>
          <p>This element state is <code>true</code> <button onClick={this.toggleState}>Toggle State</button></p>
        </div>
      );
    } else {
      return (
        <div>
          <p>This element state is <code>false</code> <button onClick={this.toggleState}>Toggle State</button></p>
        </div>
      );
    }
  }
}

function StatesExamples() {
  return (
    <React.Fragment>
        <div>
          <StateElement />
        </div>
        <div>
          <StateElement />
        </div>
      </React.Fragment>
  );
}

// The App can be declared as a function App() or as a const as well,
// just like the components (without the render() method)
class App extends Component {
  render() {
    return (
      // <React.Fragment></React.Fragment> is used to return
      // more than one component in another
      <React.Fragment>
        <StatesExamples />
      </React.Fragment>
    );
  }
}

export default App;
