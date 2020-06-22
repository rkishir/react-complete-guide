import React from 'react';
import Person from './Person.css'

const person = (props) => {
    // return <p>I am Person component and I {Math.floor(Math.random()*30)} Year old</p>
    return (
        <div className="Person">
            <p onClick={props.click}>I am  {props.name} component and I {props.age} Year old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>

    );
}

export default person;