import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {

  var [PersonsState, setPersonsState] = useState({
      persons: [
        { name: "Rakesh", age: "34" },
        { name: "guragam", age: "3" },
        { name: "lovenet", age: "33" }
      ]
    });

  // Eligent way of merging two state
  const [otherState,setOtherState] = useState('any data you wan t to add to state');

  console.log(PersonsState,otherState);
    //Event handling
 const switchNameHandler = () => {
    console.log('clicked');
    setPersonsState({
      persons: [
        { name: "kapoor", age: "40" },
        { name: "guragam", age: "3" },
        { name: "lovenet", age: "39" }
      ]
    })
  }


  return (
    <div className="App">

      <h1> Welcome to React</h1>
      <p>working</p>
      <button onClick={switchNameHandler}>Switch</button>
      <Person name={PersonsState.persons[0].name} age={PersonsState.persons[0].age} />
      <Person name={PersonsState.persons[1].name} age={PersonsState.persons[1].age} />
      <Person name={PersonsState.persons[2].name} age={PersonsState.persons[2].age} />

    </div>
  );

}

export default App;

