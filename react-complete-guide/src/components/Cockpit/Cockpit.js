import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = props => {
  let assignedClasses = [];
  let btnClass = [classes.Button]; // had to make this an array of 1 in order to use spread operator below
  if (props.showPersons) {
    // his version: btnClass = [classes.Button, classes.Red].join(' ');
    btnClass = [...btnClass, classes.Red].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }
  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Show/Hide Names
      </button>
      <button onClick={props.login}>Log in</button>
    </Aux>
  );
};

export default cockpit;
