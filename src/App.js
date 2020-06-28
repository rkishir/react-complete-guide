import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Rakesh", age: "34" },
      { name: "guragam", age: "3" },
      { name: "lovenet", age: "33" }
    ],
    otherState: "checking",
    showPersons: false
  }
  //Event handling
  switchNameHandler = (newName) => {
    console.log('clicked');
    this.setState({
      persons: [
        { name: newName, age: "40" },
        { name: "guragam", age: "3" },
        { name: "lovenet", age: "39" }
      ]
    })
  }

  nameChangeNameHandler = (event) => {
    // console.log(event);
    this.setState({
      persons: [
        { name: "Rakesh", age: "40" },
        { name: event.target.value, age: "3" },
        { name: "lovenet", age: "39" }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesshow = this.state.showPersons;
    this.setState({ showPersons: !doesshow });

  }

  render() {

    const buttonStyle = {
      backgroundColor: 'White',
      font: 'inhert',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person =>{
            return <Person name={person.name} age={person.age}></Person>
          })}
          
        </div>
      );
    }

    return (
      <div className="App">

        <h1> Welcome to React</h1>
        <p>working</p>

        <button style={buttonStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        <p>Method 1</p>
        {persons}
      </div>
    );
    // return React.createElement('div',{className:"App"}, React.createElement('h1',null,'Hi i am a react'));
  }
}

export default App;
