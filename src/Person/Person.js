import React from 'react';

const person = (props) => {
    // return <p>I am Person component and I {Math.floor(Math.random()*30)} Year old</p>
    return (
        <div>
            <p onClick={props.click}>I am  {props.name} component and I {props.age} Year old</p>
            <p>{props.children}</p>
        </div>

    );
}

export default person;