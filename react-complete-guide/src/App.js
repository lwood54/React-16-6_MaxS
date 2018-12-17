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
        { name: 'Tiffany Annette', age: 36 },
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

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Show/Hide Names
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              changed={this.nameChangedHandler}
            >
              My hobbies: Programming
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              click={this.switchNameHandler.bind(this, 'Log!')}
            />
            <Person
              name={this.state.persons[3].name}
              age={this.state.persons[3].age}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
