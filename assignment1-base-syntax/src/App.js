import React, { Component } from 'react';
import './App.css';
import UserInput from './UserIpnut/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName: 'Logan James'
  };

  reverseNameHandler = event => {
    let reversedName = event.target.value
      .split('')
      .reverse()
      .join('');
    this.setState({
      userName: reversedName
    });
  };

  render() {
    const style = {
      backgroundColor: '#bbb',
      textAlign: 'center',
      borderRadius: '5px'
    };
    return (
      <div className="App">
        <UserInput
          style={style}
          changed={this.reverseNameHandler}
          userName={this.state.userName}
        />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
