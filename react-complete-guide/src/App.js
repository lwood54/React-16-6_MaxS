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

  switchNameHandler = () => {
    // console.log('switchNameHandler was clicked');
    this.setState({
      persons: [
        { name: 'Logan James', age: 36 },
        { name: 'Tiffany Annette', age: 36 },
        { name: 'Amrynn Elise', age: 7 },
        { name: 'Eisley Quinn', age: 7 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
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
        />
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
        />
      </div>
    );
  }
}

export default App;
