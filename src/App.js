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
switchNameHandler = (newName)=>{
  console.log('clicked');
  this.setState({
    persons:[
      {name:newName,age:"40"},
      {name:"guragam",age:"3"},
      {name:"lovenet",age:"39"}
    ]
  })
}

nameChangeNameHandler = (event)=>{
  // console.log(event);
  this.setState({
    persons:[
      {name: "Rakesh",age:"40"},
      {name:  event.target.value, age:"3"},
      {name: "lovenet",age:"39"}
    ]
  })
}

  render() {

    const buttonStyle = {
      backgroundColor: 'White',
      font: 'inhert',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    }
    return (
      <div className="App">
       
       <h1> Welcome to React</h1>
       <p>working</p>
       <button style={buttonStyle} onClick={this.switchNameHandler.bind(this,"Rakesh Kapoor")}>Switch</button>
       <p>Method 1</p>
       <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age}  
       click={this.switchNameHandler.bind(this,"Guragam Kapoor")}
       changed={this.nameChangeNameHandler}
       
       > this is my hobbi</Person>

       <p>Method 2</p>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={() => this.switchNameHandler("oh hoooo")}  /> 
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
       
      </div>
    );
    // return React.createElement('div',{className:"App"}, React.createElement('h1',null,'Hi i am a react'));
  }
}

export default App;
