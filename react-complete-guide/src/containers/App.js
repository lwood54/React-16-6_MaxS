import React, { PureComponent } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import ValidationComponent from '../components/ValidationComponent/ValidationComponent';
import CharComponent from '../components/CharComponent/CharComponent';
import WithClass from '../hoc/WithClass';

// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    // can add state inside constructor function (older way to do this)
    // this.state = {
    //   persons: [
    //     { id: '54', name: 'Logan', age: 36 },
    //     { id: '34', name: 'Tiffany', age: 36 },
    //     { id: '14', name: 'Amrynn', age: 7 },
    //     { id: '24', name: 'Eisley', age: 7 }
    //   ],
    //   inputLength: 0,
    //   charList: []
    // }
  }

  componentWillMount() {
    // Can update state
    // DO NOT cause side-effects
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    // Can have side-effects here
    // DO NOT update state from this lifecycle hook
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     '[UPDATE App.js] Inside shouldComponentUpdate',
  //     nextProps,
  //     nextState
  //   );
  //   return (
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE App.js] Inside componentWillUpdate',
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDideUpdate');
  }

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
    console.log('[App.js] Inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
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
      <WithClass classes={classes.App}>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
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
      </WithClass>
    );
  }
}

export default App;
