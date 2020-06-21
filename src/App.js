import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name:"Rakesh",age:"34"},
      {name:"guragam",age:"3"},
      {name:"lovenet",age:"33"}
    ],
    otherState: "checking"
  }
//Event handling
switchNameHandler = ()=>{
  console.log('clicked');
  this.setState({
    persons:[
      {name:"kapoor",age:"40"},
      {name:"guragam",age:"3"},
      {name:"lovenet",age:"39"}
    ]
  })
}

  render() {
    return (
      <div className="App">
       
       <h1> Welcome to React</h1>
       <p>working</p>
       <button onClick={this.switchNameHandler}>Switch</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
       
      </div>
    );
    // return React.createElement('div',{className:"App"}, React.createElement('h1',null,'Hi i am a react'));
  }
}

export default App;
