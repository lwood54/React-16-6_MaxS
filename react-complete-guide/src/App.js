import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: '54', name: 'Logan', age: 36 },
      { id: '34', name: 'Tiffany', age: 36 },
      { id: '14', name: 'Amrynn', age: 7 },
      { id: '24', name: 'Eisley', age: 7 }
    ],
    inputLength: 0,
    charList: []
  };

  nameChangedHandler = (event, id) => {
    // identify an index if the id in the state matches the id that is passed
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // take that index and copy the js object that has that index which has the equal id
    // this is, again, best practice to copy the object with spread operator instead of
    // manipulating the original state
    const person = {
      ...this.state.persons[personIndex]
    };

    // now we have the new 'person' that is copied from the specific index position
    // we can specifically change its name with the event.target.value
    person.name = event.target.value;

    // we can once again copy the persons array from state using the spread operator
    const persons = [...this.state.persons];
    // then we can redefine the person at the specific index location
    // which will include the newly defined .name
    persons[personIndex] = person;

    // now we can setState and update the original array with the new array that was
    // a copy, but has been modified
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    // it is best practice to copy the original state, make changes, then update state
    // bad practice to change state itself, then update state
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  lengthHandler = event => {
    let currentInputLength = event.target.value.length;
    let charListArray = event.target.value.split('');
    this.setState({
      inputLength: currentInputLength,
      charList: charListArray
    });
  };

  deleteCharHandler = charIndex => {
    let chars = [...this.state.charList];
    chars.splice(charIndex, 1);
    this.setState({
      charList: chars,
      inputLength: chars.length
    });
  };

  ////////  render() ////////

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            // use higher order component "ErrorBoundary" to inform user of error
            // must move key to ErrorBoundary because that is what is mapped and needs a key
            // key must always be on outer element when using the .map() method
            return (
              // <ErrorBoundary key={person.id}>
              <Person
                // using an arrow function to bind the data we are passing --> alt: .bind(this,)
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
                // we use the arrow function again to accept the event we were listening for, then we were
                // able to pass the event because the arrow function allowed us to bind the data we were passing
              />
              // </ErrorBoundary>
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    // map the array to print a <CharComponent /> for each element in the array
    let charList = (
      <div>
        {this.state.charList.map((char, i) => {
          return (
            <CharComponent
              click={() => this.deleteCharHandler(i)}
              key={i}
              charProp={char}
            />
          );
        })}
      </div>
    );

    // must wrap return div in special <StyleRoot> because it's not just a pseudo selector
    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App!</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Show/Hide Names
        </button>
        {persons}
        <div className="section2">
          <input
            type="text"
            onChange={this.lengthHandler}
            value={this.state.charList.join('')}
          />
          <p>Input Length: {this.state.inputLength}</p>
        </div>
        <ValidationComponent inputLength={this.state.inputLength} />
        {charList}
      </div>
    );
  }
}

export default App;
