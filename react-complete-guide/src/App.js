import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Logan', age: 36 },
      { name: 'Tiffany', age: 36 },
      { name: 'Amrynn', age: 7 },
      { name: 'Eisley', age: 7 }
    ]
  };

  switchNameHandler = newName => {
    // console.log('switchNameHandler was clicked');
    this.setState({
      persons: [
        { name: newName, age: 36 },
        { name: 'Tiffany Annette', age: 36 },
        { name: 'Amrynn Elise', age: 7 },
        { name: 'Eisley Quinn', age: 7 }
      ],
      showPersons: false
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 36 },
        { name: event.target.value, age: 36 },
        { name: 'Amrynn Elise', age: 7 },
        { name: 'Eisley Quinn', age: 7 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      cursor: 'pointer',
      padding: '8px'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Show/Hide Names
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
