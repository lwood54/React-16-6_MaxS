import React, { Component } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

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
    // CHANGED TO CSS MODULE
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   cursor: 'pointer',
    //   padding: '8px'
    // ':hover': {
    //   // using Radium, we can use any pseudo selector and add an object of styles
    //   backgroundColor: 'lightgreen',
    //   color: 'black'
    // }
    // };

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
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
            );
          })}
        </div>
      );
      btnClass = classes.Red;
      // dynamically & conditionally styling the background-color
      // style.backgroundColor = 'red'; --> CHANGING TO CSS MODULES
      // also additionally update :hover if (this.state.showPersons)
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
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
      // <StyleRoot>
      // change from className="App" to below because we now use CSS modules and
      // it scopes and connects for us
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
      // </StyleRoot>
    );
  }
}

export default App;
// export default Radium(App); // wrap app in higher order component

/*
  -------> 1. Create an input field (in App Component) with a change listener which outputs the length
    of the entered text below it (e.g. in a paragraph)
  -------> 2. Create a new component (=> ValidationComponent) which receives the text length as a prop
  -------> 3. Inside the ValidationComponent, either output "Text too short" or "Text long enough"
    depending on the text length (e.g. take 5 as a minimum length)
  -------> 4. Create another component (=> CharComponent) and style it as an inline box
    (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black)
  -------> 5. Render a list of CharComponents where each CharComponent receives a different letter of
    the entered text (in the initial input field) as a prop.
  -------> 6. When you click a CharComponent, it should be removed from the entered text.
*/
